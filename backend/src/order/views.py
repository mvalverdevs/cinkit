from utils.views import GeneralViewSet
from order import serializers as order_serializers
from order import models as order_models
from drf_spectacular.utils import extend_schema
from rest_framework.decorators import action
from order.services import OrderService, BillService
from rest_framework.response import Response
from utils.serializers import EmptySerializer


class BillView(GeneralViewSet):
    serializer_class = order_serializers.BillSerializer
    queryset = order_models.Bill.objects.all().distinct()
    filterset_fields = ('zone_id', 'is_open')

    @extend_schema(
        request=order_serializers.NewOrderSerializer,
        responses={200: order_serializers.OrderSerializer}
    )
    @action(detail=True, methods=['post'])
    def new_order(self, request, *args, **kwargs):
        order = BillService.add_order_to_bill(
            bill=self.get_object(),
            order_items=request.data,
            user=request.user
        )

        return Response(
            order_serializers.OrderSerializer(instance=order).data
        )

    @extend_schema(
        request=EmptySerializer,
        responses={200: order_serializers.BillSerializer}
    )
    @action(detail=True, methods=['post'])
    def close(self, request, *args, **kwargs):
        bill = BillService.close_bill(
            bill=self.get_object(),
        )

        return Response(
            order_serializers.BillSerializer(instance=bill).data
        )


class OrderView(GeneralViewSet):
    serializer_class = order_serializers.OrderSerializer
    queryset = order_models.Order.objects.all().distinct()
    filterset_fields = ('bill_id', 'delivered')

    @extend_schema(
        request=EmptySerializer,
        responses={200: order_serializers.BillSerializer}
    )
    @action(detail=True, methods=['post'])
    def set_delivered(self, request, *args, **kwargs):
        order = OrderService.set_order_as_delivered(
            order=self.get_object(),
        )

        return Response(
            order_serializers.OrderSerializer(instance=order).data
        )


class ZoneView(GeneralViewSet):
    serializer_class = order_serializers.ZoneSerializer
    queryset = order_models.Zone.objects.all().distinct()