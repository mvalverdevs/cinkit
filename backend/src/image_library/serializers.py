from utils.serializers import DynamicModelSerializer
from image_library.models import Image, ImageCategory


class ImageSerializer(DynamicModelSerializer):
    class Meta:
        model = Image
        fields = (
            'id',
            'image',
            'category',
        )
        read_only_fields = (
            'id',
        )


class ImageCategorySerializer(DynamicModelSerializer):
    class Meta:
        model = ImageCategory
        fields = (
            'id',
            'name',
        )
        read_only_fields = (
            'id',
        )
