from rest_framework import serializers
from .models import Shiba

class ShibaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shiba
        fields = ['name', 'eyecolor', 'furcolor', 'personality', 'experience_points', 'top_hat','bow_tie','glasses','muzzle','hair_clip','dramatic_mustache','cane']
