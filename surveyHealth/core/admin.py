from django.contrib import admin
from .models import UserSurvey

# Register your models here.
class UserSurveyAdmin(admin.ModelAdmin):
    readonly_fields = ('name', 'surveyId', 'email', 'age', 'sex', 'kids', 'state', 'municipality', 'typeOfResidence', 'facultyYear', 'civilStatus', 'occupation', 'semester', 'worked', 'seriousWorkProblems', 'workDifficulties', 'accessToInternetAndDevices_Doctor', 'accessToInternetAndDevices_Student', 'academicPerformance', 'difficultiesToStudy', 'typeOfActivity', 'useOfMask', 'typeOfMask', 'pt1_1', 'pt1_2', 'pt1_3', 'pt1_4', 'pt1_5', 'pt1_6', 'pt1_7', 'pt1_8', 'pt1_9', 'pt1_10', 'pt1_11', 'pt1_12', 'pt1_13', 'pt1_14', 'pt1_15', 'pt1_16', 'pt1_17', 'pt1_18', 'pt1_19', 'pt1_20', 'pt1_21', 'pt2_Intense_1', 'pt2_Intense_2', 'pt2_Moderated_1', 'pt2_Moderated_2', 'pt2_Hike_1', 'pt2_Hike_2', 'pt2_Seated_1', 'pt3_1', 'pt3_2', 'pt3_3', 'pt3_4', 'pt3_5', 'pt3_6', 'pt3_7', 'pt3_8', 'pt3_9', 'pt3_10', 'pt4_1', 'pt4_2', 'pt4_3', 'pt4_4', 'pt4_5', 'pt4_6', 'pt5_1', 'pt5_2', 'pt5_3', 'pt5_4', 'pt5_5', 'pt5_6', 'pt5_7', 'pt5_8', 'image', 'created')
    list_display = ['name', 'occupation', 'state', 'surveyId', 'email']

admin.site.register(UserSurvey, UserSurveyAdmin)