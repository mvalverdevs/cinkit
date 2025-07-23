from utils.views import GeneralViewSet
from order import serializers as order_serializers
from order import models as order_models


class BillView(GeneralViewSet):
    serializer_class = order_serializers.BillSerializer
    queryset = order_models.Bill.objects.all().distinct()
    filterset_fields = ('zone_id',)


class OrderView(GeneralViewSet):
    serializer_class = order_serializers.OrderSerializer
    queryset = order_models.Order.objects.all().distinct()


class ZoneView(GeneralViewSet):
    serializer_class = order_serializers.ZoneSerializer
    queryset = order_models.Zone.objects.all().distinct()