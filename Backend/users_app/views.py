from django.shortcuts import render
from django.contrib.auth import authenticate
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class SignUp(APIView):
    def post(self,request):
        email = request.data.get("email")
        password = request.data.get("password")

        # getting 500 error from email entered not being unique
        # 

        if not email or not password:
            return Response({"error": "Email, password, and username are required fields."}, status=HTTP_400_BAD_REQUEST)
        
        try:
            client = User.objects.create_user(**request.data)
        except: 
            return Response({"error": "User information already exists."}, status=HTTP_400_BAD_REQUEST)

        token = Token.objects.create(user=client)
        return Response(
            {"user": client.email, "token": token.key}, status=HTTP_201_CREATED
        )

    
class Log_in(APIView):
    def post(self,request):
        email = request.data.get("email")
        password = request.data.get("password")
        client = authenticate(username=email, password=password)
        if client:
            token, created = Token.objects.get_or_create(user=client)
            return Response({"token": token.key, "client": client.email, "message": "You have been logged in!"}, status=HTTP_200_OK)
        else:
            return Response({"message": "No user matching credentials."}, status=HTTP_400_BAD_REQUEST)
        
class Log_out(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self,request):
        request.user.auth_token.delete()
        return Response({"message": "You have been logged out!"}, status=HTTP_200_OK)
    
class UserProfile(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        data = {
            "id": user.id,
            "username": user.username,
            "email": user.email,
        }
        return Response(data)
    
    def put(self, request):
        user = request.user
        data = request.data
        user.username = data.get("username", user.username)
        user.email = data.get("email", user.email)
        user.save()

        return Response({"message": "Profile updated successfully."}, status=HTTP_200_OK)





#  For me :)
# {
#     "email" : "captain@us.com",
#     "username": "IAmTheCaptainNow",
#     "password": "usa"
# }