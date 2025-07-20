from drf_spectacular.extensions import OpenApiSerializerExtension
from drf_spectacular.utils import OpenApiParameter, OpenApiTypes, extend_schema
from drf_spectacular.openapi import AutoSchema


class SwaggerAutoSchema(AutoSchema):
    def get_override_parameters(self):
        """Add global parameters like ?fields=... and ?expand=..."""
        parameters = super().get_override_parameters()

        parameters += [
            OpenApiParameter(
                name='fields',
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                description='List of fields to include in response, e.g. ?fields=id,name',
                required=False,
            ),
            OpenApiParameter(
                name='expand',
                type=OpenApiTypes.STR,
                location=OpenApiParameter.QUERY,
                description='List of related objects to expand, e.g. ?expand=author,comments',
                required=False,
            ),
        ]
        return parameters

    def get_operation(self, path, path_regex, method, registry):
        operation = super().get_operation(path, path_regex, method, registry)

        # Añadir x-whatever al schema si se pasan en el decorator @extend_schema
        overrides = self.view.override_getter.get_override_for_method(method, 'extend_schema', default={})

        for key, value in overrides.items():
            if key.startswith("x_"):
                x_key = key.replace("_", "-")  # puede ser más limpio en snake_case pero depende del naming
                operation[f"x-{x_key[2:]}"] = value  # remove the x_ prefix and format
