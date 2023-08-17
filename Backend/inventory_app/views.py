from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UserInventory
from .serializers import UserInventorySerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class UserInventoryView(APIView):
    def get(self, request, format=None):
        # call only when user is logged in.
        #throw 401 who tries to access inventory api with missing or mismatching credentials/key.
        # check user id with token
        authentication_classes = [TokenAuthentication]
        permission_classes = [IsAuthenticated]
        # get user information based on token
        print(request)
        inventory = UserInventorySerializer(UserInventory.objects.order_by('owned_shibas'), many=True)
        return Response(inventory.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = UserInventorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

