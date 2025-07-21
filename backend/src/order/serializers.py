from utils.serializers import DynamicModelSerializer

from order import models as order_models


class BillSerializer(DynamicModelSerializer):
    class Meta:
        model = order_models.Bill
        fields = '__all__'


class ordererializer(DynamicModelSerializer):
    class Meta:
        model = order_models.Order
        fields = '__all__'


class ZoneSerializer(DynamicModelSerializer):
    class Meta:
        model = order_models.Zone
        fields = '__all__'
