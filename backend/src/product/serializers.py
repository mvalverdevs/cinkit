from utils.serializers import DynamicModelSerializer
from rest_framework.serializers import ListSerializer, ModelSerializer, SerializerMethodField
from product import models as product_models
from image_library.serializers import ImageSerializer
from drf_spectacular.utils import extend_schema_field



class ProductSerializer(ModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')
    complements_data = SerializerMethodField()

    class Meta:
        model = product_models.Product
        fields = (
            'id',
            'name',
            'image',
            'image_data',
            'price',
            'category',
            'complements',
            'complements_data',
        )
        read_only_fields = (
            'id',
            'image_data',
            'complements_data',
        )

    def get_complements_data(self, obj):
        depth = self.context.get("_depth", 0)
        if depth >= 1:  # corta a 1 nivel
            return [{"id": p.id, "name": p.name} for p in obj.complements.all()]
        return ProductSerializer(
            obj.complements.all(),
            many=True,
            context={**self.context, "_depth": depth + 1}
        ).data


class ProductCategorySerializer(ModelSerializer):
    image_data = ImageSerializer(read_only=True, source='image')

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
