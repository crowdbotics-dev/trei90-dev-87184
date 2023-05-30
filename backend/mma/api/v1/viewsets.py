from rest_framework import authentication
from mma.models import Brat
from .serializers import BratSerializer
from rest_framework import viewsets

class BratViewSet(viewsets.ModelViewSet):
    serializer_class = BratSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Brat.objects.all()