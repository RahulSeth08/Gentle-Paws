from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)  # Ensure email is required

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True},  # Prevent password from being exposed
            'email': {'required': True}
        }

    def validate_email(self, value):
        """Ensure email is unique"""
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("A user with this email already exists.")
        return value

    def create(self, validated_data):
        """Hash the password before saving"""
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)  # Hash password
        user.save()
        return user
