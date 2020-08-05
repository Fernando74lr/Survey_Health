from django.contrib import admin
from .models import UserSurvey

# Register your models here.
class UserSurveyAdmin(admin.ModelAdmin):
    readonly_fields = ('name', 'surveyId', 'email', 'age', 'sex', 'kids', 'state', 'municipality', 'typeOfResidence', 'facultyYear', 'civilStatus', 'occupation', 'semester', 'worked', 'seriousWorkProblems', 'workDifficulties', 'accessToInternetAndDevices_Doctor', 'accessToInternetAndDevices_Student', 'academicPerformance', 'difficultiesToStudy', 'typeOfActivity', 'useOfMask', 'typeOfMask', 'image', 'created')
    list_display = ['name', 'occupation', 'state', 'surveyId', 'email']

admin.site.register(UserSurvey, UserSurveyAdmin)