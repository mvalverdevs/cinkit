from django.contrib.auth.mixins import PermissionRequiredMixin
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import mixins, viewsets
from rest_framework.filters import OrderingFilter, SearchFilter
from rest_framework.permissions import DjangoModelPermissions, IsAuthenticated, AllowAny
from utils.authentication import ExpiringTokenAuthentication


class GeneralViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    # PermissionRequiredMixin
):
    authentication_classes = (ExpiringTokenAuthentication, )
    permission_classes = (IsAuthenticated, ) # DjangoModelPermissions
    filter_backends = (SearchFilter, DjangoFilterBackend, OrderingFilter)
    # ordering = ('-field',)
    # filterset_class = FilterClass
    # search_fields = ('field', 'field2')
