from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BittestViewSet,Zak12ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('bittest', BittestViewSet )
router.register('zak12', Zak12ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
