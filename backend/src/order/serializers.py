from rest_framework.serializers import ListSerializer, ModelSerializer

from order import models as order_models
from image_library.serializers import ImageSerializer


class BillSerializer(ModelSerializer):
    class Meta:
        model = order_models.Bill
        fields = (
            'id',
            'created_at',
            'closed_at',
            'is_open',
            'amount',
            'zone'
        )

        read_only_fields = (
            'id',
            'created_at'
        )


class OrderSerializer(ModelSerializer):
    class Meta:
        model = order_models.Order
        fields = '__all__'


class ZoneSerializer(ModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')

    class Meta:
        model = order_models.Zone
        fields = (
            'id',
            'name',
            'image',
            'image_data'
        )
        read_only_fields = (
            'id',
            'image_data',
        )
