from django.urls import path
from .views import SignUp,Log_in,Log_out,UserProfile

urlpatterns = [
    path('signup/', SignUp.as_view(), name='signup'),
    path('login/', Log_in.as_view(), name='login'),
    path('logout/', Log_out.as_view(), name='logout'),
    path('profile/', UserProfile.as_view(), name='profile')

]