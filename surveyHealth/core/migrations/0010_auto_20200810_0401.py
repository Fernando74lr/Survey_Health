# Generated by Django 3.0.7 on 2020-08-10 04:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20200804_2243'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usersurvey',
            options={'ordering': ['-created'], 'verbose_name': 'Encuestado', 'verbose_name_plural': 'Encuestados'},
        ),
    ]
