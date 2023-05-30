
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BratViewSet
router = DefaultRouter()
router.register('brat', BratViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
