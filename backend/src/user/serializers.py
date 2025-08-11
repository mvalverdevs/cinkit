import re

from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from django.middleware import csrf
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers
from user import models as user_models
from utils.serializers import DynamicModelSerializer
from django.utils import timezone
from drf_spectacular.utils import extend_schema_field
from rest_framework.authtoken.models import Token
from datetime import timedelta
from django.conf import settings


class UserSerializer(DynamicModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'id',
            'password',
            'dni',
            'first_name',
            'last_name',
            'role',
            'phone',
            'is_active',
            'deactivation_datetime',
            'login_attempts',
            'last_bad_login_attempt_datetime',
            'has_login_blocked',
        )
        read_only_fields = (
            'id',
            'date_joined',
            'deactivation_datetime',
            'last_bad_login_attempt_datetime',
            'has_login_blocked',
        )


class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = user_models.User
        fields = (
            'dni',
            'password',
            'token'
        )

    @extend_schema_field(field=serializers.CharField)
    def get_token(self, user):
        try:
            token = Token.objects.get(user=user)
            if token.created < timezone.now() - timedelta(days=settings.TOKEN_EXPIRATION_DAYS):
                token.delete()
                token = Token.objects.create(user=user)
        except Token.DoesNotExist:
            token = Token.objects.create(user=user)

        return token.key


class EmailSerializer(serializers.Serializer):
    """
    Validate the contact email
    """
    email = serializers.EmailField()


class ResetPasswordSerializer(serializers.Serializer):
    """
    Validate the contact email
    """
    token = serializers.CharField()
    new_password1 = serializers.CharField()
    new_password2 = serializers.CharField()

    class Meta(object):
        model = user_models.User
        fields = ('token', 'new_password1', 'new_password2')
        read_only_fields = ('new_password1', 'new_password2')

    def validate(self, data):
        """
        Validate if both passwords match
        """
        password = data.get('new_password1', None)
        password2 = data.get('new_password2', None)

        if password is not None and password2 is not None:
            validate_password(password)
            if password != password2:
                raise serializers.ValidationError("Passwords do not match")
            else:
                data['password'] = make_password(password)
        return data


class PermissionSerializer(serializers.Serializer):
    """
	Serialize pydrfpermissions
	"""
    url = serializers.CharField()
    action = serializers.CharField()
