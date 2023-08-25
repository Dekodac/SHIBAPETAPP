from django.urls import path
from .views import SignUp,Log_in,Log_out,UserProfileView

urlpatterns = [
    path('signup/', SignUp.as_view(), name='signup'),
    path('login/', Log_in.as_view(), name='login'),
    path('logout/', Log_out.as_view(), name='logout'),
    path('account/', UserProfileView.as_view(), name='userprofileview')
]