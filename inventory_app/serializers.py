from rest_framework import serializers
from .models import OwnedShiba, UserInventory
from shiba_app.serializers import ShibaSerializer
from users_app.serializers import UserSerializer

class OwnedShibaSerializer(serializers.ModelSerializer):
    name = ShibaSerializer()

    class Meta:
        model = OwnedShiba
        fields = ['user', 'name']

class UserInventorySerializer(serializers.ModelSerializer):
    owned_shibas = OwnedShibaSerializer(many=True)
    user = UserSerializer()

    class Meta:
        model = UserInventory
        fields = ['user', 'owned_shibas']
