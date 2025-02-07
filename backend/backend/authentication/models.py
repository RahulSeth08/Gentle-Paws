from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email=email, name=name, password=password, **extra_fields)

class CustomUser(AbstractUser):
    username = None  # Remove username
    email = models.EmailField(unique=True, blank=False, null=False)
    name = models.CharField(max_length=255, blank=False, null=False, default="Unknown")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']  # Removed 'username'

    objects = CustomUserManager()  # Use CustomUserManager

    def __str__(self):
        return self.email  # Use email as string representation
