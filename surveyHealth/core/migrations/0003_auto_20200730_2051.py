# Generated by Django 3.0.7 on 2020-07-31 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_usersurvey_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersurvey',
            name='image',
            field=models.ImageField(upload_to='media/usersSign', verbose_name='Image'),
        ),
    ]
