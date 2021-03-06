# Generated by Django 3.0.7 on 2020-07-31 04:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20200730_2126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersurvey',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='usersurvey',
            name='image',
            field=models.ImageField(unique=True, upload_to='usersSign', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='usersurvey',
            name='name',
            field=models.CharField(max_length=200, unique=True, verbose_name='Name'),
        ),
    ]
