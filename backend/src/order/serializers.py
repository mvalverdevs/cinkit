from rest_framework.serializers import ListSerializer, ModelSerializer, Serializer

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
            'zone',
            'orders_number',
            'last_3_products'
        )

        read_only_fields = (
            'id',
            'created_at',
            'orders_number',
            'last_3_products'
        )


class OrderItemSerializer(ModelSerializer):
    class Meta:
        model = order_models.OrderItem
        fields = (
            'id',
            'order',
            'product',
            'quantity',
            'note'
        )
        read_only_fields = (
            'id',
        )


class NewOrderSerializer(ListSerializer):
    child = OrderItemSerializer()


class OrderSerializer(ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = order_models.Order
        fields = (
            'id',
            'bill',
            'user',
            'delivered',
            'items'
        )
        read_only_fields = (
            'id',
            'items'
        )


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
