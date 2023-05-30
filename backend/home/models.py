from django.conf import settings
from django.db import models
class Bittest(models.Model):
    'Generated Model'
    cittest = models.BigIntegerField()
    mtest = models.BigIntegerField(null=True,blank=True,)
    fitest = models.UUIDField(null=True,blank=True,)
class Zak12(models.Model):
    'Generated Model'
    cert = models.GenericIPAddressField(protocol="both",unpack_ipv4=False,)
    vcwrr = models.SlugField(max_length=50,null=True,blank=True,)
    zabtr = models.DateTimeField(null=True,blank=True,)
    lopi = models.PositiveSmallIntegerField(null=True,blank=True,)
    xcopu = models.ManyToManyField("home.Bittest",blank=True,related_name="zak12_xcopu",)
