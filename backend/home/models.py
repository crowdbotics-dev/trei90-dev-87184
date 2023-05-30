from django.conf import settings
from django.db import models
class Bittest(models.Model):
    'Generated Model'
    cittest = models.BigIntegerField()
    mtest = models.BigIntegerField(null=True,blank=True,)
