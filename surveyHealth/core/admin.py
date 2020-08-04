from django.contrib import admin
from .models import UserSurvey

# Register your models here.
class UserSurveyAdmin(admin.ModelAdmin):
    readonly_fields = ('image', 'created')
    list_display = ['name', 'email']

admin.site.register(UserSurvey, UserSurveyAdmin)