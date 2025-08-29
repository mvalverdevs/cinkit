from rest_framework.serializers import ListSerializer, ModelSerializer, Serializer

from order import models as order_models
from image_library.serializers import ImageSerializer
from product.serializers import ProductSerializer
from user.serializers import UserSerializer


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
    product_data = ProductSerializer(
        source='product',
        read_only=True
    )

    complements_data = ProductSerializer(
        source='complements',
        read_only=True,
        many=True
    )

    class Meta:
        model = order_models.OrderItem
        fields = (
            'id',
            'order',
            'product',
            'quantity',
            'note',
            'product_data',
            'complements',
            'complements_data',
        )
        read_only_fields = (
            'id',
            'product_data',
            'complements_data',
        )


class NewOrderSerializer(ListSerializer):
    child = OrderItemSerializer()


class OrderSerializer(ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    user_data = UserSerializer(read_only=True, source='user')

    class Meta:
        model = order_models.Order
        fields = (
            'id',
            'bill',
            'user',
            'delivered',
            'items',
            'amount',
            'user_data',
            'created_at',
            'delivered_at'
        )
        read_only_fields = (
            'id',
            'items',
            'user_data'
            'created_at',
        )


class ZoneSerializer(ModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')

    class Meta:
        model = order_models.Zone
        fields = (
            'id',
            'name',
            'image',
            'image_data',
            'is_deleted'
        )
        read_only_fields = (
            'id',
            'image_data',
            'is_deleted'
        )
