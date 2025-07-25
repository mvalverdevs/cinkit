"""
Django settings for main project.

Generated by 'django-admin startproject' using Django 4.2.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""
from pathlib import Path

from decouple import Csv, config

# https://docs.djangoproject.com/en/dev/ref/settings/#debug
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config("DJANGO_DEBUG", cast=bool, default=True)

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

ROOT_DIR = Path(__file__).parent 
APPS_DIR = ROOT_DIR.parent.parent

# https://docs.djangoproject.com/en/dev/ref/settings/#secret-key
# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config(
    "DJANGO_SECRET_KEY",
    default="django-insecure-23djcsjy+e8fcax&@!zh7*z3-=#@t^cv99w*km%57jru*_uvez",
)

# https://docs.djangoproject.com/en/dev/ref/settings/#allowed-hosts
ALLOWED_HOSTS = config("DJANGO_ALLOWED_HOSTS", cast=Csv(), default="*")
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

# Application definition

DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

THIRD_PARTY_APPS = [
    'rest_framework',
    'rest_framework.authtoken',
    'django_filters',
    'phonenumber_field',
    'django_redis',
    'django_extensions',
    'drf_spectacular',
    'drf_spectacular_sidecar',
    'corsheaders'
]

LOCAL_APPS = [
    'main',
    'user',
    'image_library',
    'product',
    'order'
]

# https://docs.djangoproject.com/en/dev/ref/settings/#installed-apps
INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

# https://docs.djangoproject.com/en/dev/ref/settings/#password-hashers
PASSWORD_HASHERS = [
    # https://docs.djangoproject.com/en/dev/topics/auth/passwords/#using-argon2-with-django
    "django.contrib.auth.hashers.Argon2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2PasswordHasher",
    "django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher",
    "django.contrib.auth.hashers.BCryptSHA256PasswordHasher",
    "django.contrib.auth.hashers.BCryptPasswordHasher",
]


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
]

ROOT_URLCONF = 'main.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'main.wsgi.application'

# https://docs.djangoproject.com/en/dev/ref/settings/#static-root
STATIC_ROOT = str(BASE_DIR.parent.joinpath("public_html/collectedstatic"))
# https://docs.djangoproject.com/en/dev/ref/settings/#static-url
STATIC_URL = "/static/"
# https://docs.djangoproject.com/en/dev/ref/contrib/staticfil/#staticfiles-finders
STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]

# MEDIA
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#media-root
MEDIA_ROOT = str(APPS_DIR.joinpath("media"))
# https://docs.djangoproject.com/en/dev/ref/settings/#media-url
MEDIA_URL = "/media/"

MAX_UPLOAD_FILE_SIZE_BYTES = 25 * 1024 # Bytes (25 MB)
MAX_UPLOAD_IMAGE_SIZE_BYTES = 25 * 1024 # Bytes (25 MB)

# Folder to store translations
LOCALE_PATHS = (str(APPS_DIR.joinpath("locale")), )


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'ATOMIC_REQUESTS': True,
        'CONN_MAX_AGE':  config("DJANGO_DATABASE_CONN_MAX_AGE", cast=int, default=60),
        'NAME': config("POSTGRES_DB", default=''),
        'USER': config("POSTGRES_USER", default=''),
        'PASSWORD': config("POSTGRES_PASSWORD", default=''),
        'HOST': config("POSTGRES_HOST", default=''),
        'PORT': config("POSTGRES_PORT", default='')
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
        'OPTIONS': {
            'min_length': 8, 
        }
     },
    {'NAME': 'utils.validators.NumberValidator', },
    {'NAME': 'utils.validators.UppercaseValidator', },
    {'NAME': 'utils.validators.LowercaseValidator', },
    {'NAME': 'utils.validators.SymbolValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',},
]

AUTH_USER_MODEL = 'user.User'

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Europe/Madrid'
USE_I18N = True
USE_TZ = True


# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CELERY_BROKER_URL=config('REDIS_URL', default='redis://redis:6379/0')

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'DRF Token': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header'
        }
    },
    'DEFAULT_AUTO_SCHEMA_CLASS': 'main.swagger.SwaggerAutoSchema',
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_FILTER_BACKENDS': [
        'rest_framework.filters.SearchFilter',
        'django_filters.rest_framework.DjangoFilterBackend',
        'rest_framework.filters.OrderingFilter'
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 10,
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    'TEST_REQUEST_DEFAULT_FORMAT': 'json',
}

SPECTACULAR_SETTINGS = {
    'TITLE': 'newproj API',
    'DESCRIPTION': 'Test description',
    'VERSION': '1.0.0',
    'TERMS_OF_SERVICE': 'https://www.google.com/policies/terms/',
    'CONTACT': {
        'email': 'contact@example.org',
    },
    'LICENSE': {
        'name': 'Custom License',
    },
    'SERVE_PERMISSIONS': ['rest_framework.permissions.AllowAny'],
    # Puedes añadir otros ajustes si hace falta
}

MAX_LOGIN_ATTEMPTS = 5

# DURATION (HOURS) BEFORE DELETE TOKEN IN RESET PASS o ACTIVE ACCOUNT
DURATION_RESET_TOKEN = 3

MAX_UPLOAD_FILE_SIZE_BYTES = 25 * 1024 # Bytes (25 MB)
MAX_UPLOAD_IMAGE_SIZE_BYTES = 25 * 1024 # Bytes (25 MB)

FILE_EXTENSIONS = ("doc", "pdf", "docx", "odt", "jpg", "jpeg", "png", "gif", "png")
IMAGE_EXTENSIONS = ("jpg", "jpeg", "png", "gif")


PHONENUMBER_DB_FORMAT = 'NATIONAL'
PHONENUMBER_DEFAULT_REGION = 'ES'

TOKEN_EXPIRATION_DAYS = 7


# CACHES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#caches
CACHES = {
    'default': {
        "BACKEND": "django_redis.cache.RedisCache",
        "LOCATION": config('REDIS_URL', default='redis://redis:6379/0'),
    },
}

if DEBUG is True:
    SWAGGER_SETTINGS.update({'PERSIST_AUTH': True})
