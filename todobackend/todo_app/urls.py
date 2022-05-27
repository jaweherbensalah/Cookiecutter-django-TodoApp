from rest_framework import routers
from django.urls import path, include                  # add this
from .views import  TodoViewSet


router = routers.DefaultRouter()
# router.register('users', UserViewSet)
router.register('crud', TodoViewSet)

urlpatterns = [        
    path('', include(router.urls))                # add this
]