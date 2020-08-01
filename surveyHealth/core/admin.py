from django.contrib import admin
from .models import UserSurvey

# Register your models here.
class UserSurveyAdmin(admin.ModelAdmin):
    readonly_fields = ('name', 'email', 'image', 'created', 'updated')
    list_display = ['name', 'email']

admin.site.register(UserSurvey, UserSurveyAdmin)