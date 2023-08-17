from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Shiba
from .serializers import ShibaSerializer

class ShibaList(APIView):
    
    def get(self, request, format=None):
        shibas = Shiba.objects.all()
        serializer = ShibaSerializer(shibas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


