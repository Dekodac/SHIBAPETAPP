from rest_framework import status
from .serializers import UserSerializer
from django.core.serializers import serialize
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse,HttpResponse
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


class SignUp(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        name = request.data['name']
        super_user = False
        staff = False
        if 'super' in request.data:
            super_user = request.data['super']
        if 'staff' in request.data:
            staff = request.data['staff']
        try:
            # creates new user
            new_user = User.objects.create_user(username = email, email = email, name = name, password = password, is_superuser = super_user, is_staff = staff)
            new_user.save()
            return JsonResponse({"success":True})
        except Exception as e:
            print(e)
            return JsonResponse({"success": False})



class Log_in(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(username = email , password = password)
        if user is not None and user.is_active:
            try:
                # Creates SessionID
                login(request._request, user)
                print(user)
                return JsonResponse({'email': user.email, 'name':user.name})
            except Exception as e:
                print(e)
                return JsonResponse({'login':False})
        return JsonResponse({'login':False})


class CurrentUser(APIView):
    def get(self,request):

        if request.user.is_authenticated:
            #                    format       query                     options
            user_info = serialize("json",  [request.user], fields = ['name', 'email'])
            user_info_workable = json.loads(user_info)
            return JsonResponse(user_info_workable[0]['fields'])
        else:
            return JsonResponse({"user":None})
        
    
class Log_out(APIView):
    def post(request):
        try:
            # Removes SessionID
            logout(request)
            return JsonResponse({"logout":True})
        except Exception as e:
            print(e)
            return JsonResponse({"logout":False})
    














# class SignUp(APIView):
#     def post(self,request):
#         email = request.data.get("email")
#         password = request.data.get("password")

#         if not email or not password:
#             return Response({"error": "Email, password, and username are required fields."}, status=HTTP_400_BAD_REQUEST)
        
#         try:
#             client = User.objects.create_user(**request.data)
#         except: 
#             return Response({"error": "User information already exists."}, status=HTTP_400_BAD_REQUEST)

#         token = Token.objects.create(user=client)
#         return Response(
#             {"user": client.email, "token": token.key}, status=HTTP_201_CREATED
#         )
    
# class Log_in(APIView):
#     def post(self,request):
#         email = request.data.get("email")
#         password = request.data.get("password")
#         client = authenticate(username=email, password=password)
#         if client:
#             token, created = Token.objects.get_or_create(user=client)
#             return Response({"token": token.key, "client": client.email, "message": "You have been logged in!"}, status=HTTP_200_OK)
#         else:
#             return Response({"message": "No user matching credentials."}, status=HTTP_400_BAD_REQUEST)
        
# class Log_out(APIView):
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def post(self,request):
#         request.user.auth_token.delete()
#         return Response({"message": "You have been logged out!"}, status=HTTP_200_OK)
    
# class UserProfile(APIView):
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         user = request.user
#         data = {
#             "id": user.id,
#             "username": user.username,
#             "email": user.email,
#         }
#         return Response(data)
    
#     def put(self, request):
#         user = request.user
#         data = request.data
#         user.username = data.get("username", user.username)
#         user.email = data.get("email", user.email)
#         user.save()

#         return Response({"message": "Profile updated successfully."}, status=HTTP_200_OK)



# class UserRegistration(APIView):
#     pass

    
