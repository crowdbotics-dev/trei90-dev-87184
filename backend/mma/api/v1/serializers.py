from rest_framework import serializers
from mma.models import Brat

class BratSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brat
        fields = "__all__"