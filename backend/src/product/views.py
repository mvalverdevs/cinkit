from utils.views import GeneralViewSet
from product import serializers as product_serializers
from product import models as product_models


class ProductView(GeneralViewSet):
    serializer_class = product_serializers.ProductSerializer
    queryset = product_models.Product.objects.all().distinct()
