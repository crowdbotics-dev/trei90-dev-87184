# Generated by Django 2.2.28 on 2023-05-30 09:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0008_auto_20230530_0813'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vyui',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mkoii', models.BigIntegerField()),
            ],
        ),
    ]