from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BittestViewSet,XewrwtViewSet,Zak12ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('bittest', BittestViewSet )
router.register('zak12', Zak12ViewSet )
router.register('xewrwt', XewrwtViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
