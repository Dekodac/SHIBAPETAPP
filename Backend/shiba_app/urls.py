from django.urls import path
from .views import ShibaList

urlpatterns = [
    path('api/shibas/', ShibaList.as_view(), name='shiba-list'),

]
from django.urls import path
from .views import ShibaList

urlpatterns = [
    path('shibas/', ShibaList.as_view(), name='shibas'),
    
]
