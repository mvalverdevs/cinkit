from utils.views import GeneralViewSet
from product import serializers as product_serializers
from product import models as product_models
from rest_framework import mixins


class ProductView(GeneralViewSet):
    serializer_class = product_serializers.ProductSerializer
    queryset = product_models.Product.objects.all().distinct().order_by('-modified')
    filterset_fields = ('category_id',)
    search_fields = (
        'name',
    )


class ProductCategoryView(GeneralViewSet, mixins.DestroyModelMixin):
    serializer_class = product_serializers.ProductCategorySerializer
    queryset = product_models.ProductCategory.objects.all().distinct()


class ProductOptionGroupView(GeneralViewSet):
    serializer_class = product_serializers.ProductOptionGroupSerializer
    queryset = product_models.ProductOptionGroup


class ProductOptionItemView(GeneralViewSet):
    serializer_class = product_serializers.ProductOptionItemSerializer
    queryset = product_models.ProductOptionItem
