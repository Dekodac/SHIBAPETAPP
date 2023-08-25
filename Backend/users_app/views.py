from rest_framework import status
from .serializers import UserSerializer
from django.core.serializers import serialize
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST
)
import json

class SignUp(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        super_user = False
        staff = False
        if 'super' in request.data:
            super_user = request.data['super']
        if 'staff' in request.data:
            staff = request.data['staff']
        try:
            # creates new user
            new_user = User.objects.create_user(username = email, email = email, password = password, is_superuser = super_user, is_staff = staff)
            #create token
            token, _ = Token.objects.get_or_create(user=new_user)
            new_user.save()
            return JsonResponse({"success":True, "token": token.key})
        except Exception as e:
            print(e)
            return JsonResponse({"success": False})



class Log_in(APIView):

    def post(self,request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(email = email , password = password)
        if user is not None and user.is_active:
            try:
                # Creates SessionID
                login(request._request, user)
                print("creating sessionID")
                token, created = Token.objects.get_or_create(user=user)
                return JsonResponse({'token': token.key, 'email': user.email})
            except Exception as e:
                print(e)
                return JsonResponse({'login':False})
        return JsonResponse({'login':False})

        
class UserProfileView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
        
    
class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=HTTP_204_NO_CONTENT)
    
