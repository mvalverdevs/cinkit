from utils.serializers import DynamicModelSerializer
from rest_framework.serializers import ListSerializer, ModelSerializer, SerializerMethodField
from product import models as product_models
from image_library.serializers import ImageSerializer
from drf_spectacular.utils import extend_schema_field
from drf_writable_nested import WritableNestedModelSerializer


class ProductOptionItemSerializer(WritableNestedModelSerializer):
    class Meta:
        model = product_models.ProductOptionItem
        fields = (
            'id',
            'group',
            'product',
            'price_delta',
            'is_default',
            'sort_order'
        )
        read_only_fields = (
            'id',
        )


class ProductOptionGroupSerializer(WritableNestedModelSerializer):
    items_data = ProductOptionItemSerializer(
        source='items',
        many=True,
        read_only=True
    )

    class Meta:
        model = product_models.ProductOptionGroup
        fields = (
            'id',
            'product',
            'name',
            'min_choices',
            'max_choices',
            'source_category',
            'sort_order',
            'items',
            'items_data',
        )
        read_only_fields = (
            'id',
            'items_data',
        )


class ProductSerializer(WritableNestedModelSerializer):
    image_data = ImageSerializer(
        read_only=True,
        source='image'
    )

    option_groups = ProductOptionGroupSerializer(
        many=True,
    )

    class Meta:
        model = product_models.Product
        fields = (
            'id',
            'name',
            'image',
            'image_data',
            'price',
            'category',
            'type',
            'option_groups',
            'created',
            'modified'
        )
        read_only_fields = (
            'id',
            'image_data',
            'created',
            'modified',
        )


class ProductCategorySerializer(ModelSerializer):
    image_data = ImageSerializer(
        read_only=True,
        source='image'
    )

    class Meta:
        model = product_models.ProductCategory
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
