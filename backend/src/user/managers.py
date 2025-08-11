from django.contrib.auth.models import BaseUserManager


class UserManager(BaseUserManager):
    def create(self, dni, password, **extra_fields):
        user = self.model(
            dni=dni,
            **extra_fields
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, dni, password):
        user = self.create(
            dni=dni,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
