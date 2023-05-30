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
    vcwrr = models.SlugField(null=True,blank=True,max_length=50,)
    lopi = models.PositiveSmallIntegerField(null=True,blank=True,)
    xcopu = models.ManyToManyField("home.Bittest",blank=True,related_name="zak12_xcopu",)
class Xewrwt(models.Model):
    'Generated Model'
    nmjui = models.CharField(max_length=256,)
    ncery = models.DurationField(null=True,blank=True,)
    qasdd = models.UUIDField(null=True,blank=True,)
    ertfd = models.FloatField(null=True,blank=True,)
    iuyt = models.BigIntegerField(null=True,blank=True,)
