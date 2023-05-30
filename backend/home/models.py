from django.conf import settings
from django.db import models
class Bittest(models.Model):
    'Generated Model'
    finest = models.CharField()
    newty = models.BigIntegerField(null=True,blank=True,)
    fitest = models.UUIDField(null=True,blank=True,)
