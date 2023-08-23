from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']



# class UserRegistrationSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     username = serializers.CharField()
#     password = serializers.CharField(write_only=True)
