from django.shortcuts import render, redirect
from django.urls import reverse
from .models import UserSurvey
import base64
import json

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

# ¿ESTO QUÉ?
def resultsInfo(request):
    users = UserSurvey.objects.all()

    emails = ''
    for user in users:
        emails+= str(user.email) + ','
    
    return render(request, 'core/results.html', {'emails' : emails})

def formatName(name):
    # Separate the name.
    initialsName = name.split(' ')
    # Capitalize de first letter of each word.
    formated = []
    for name in initialsName:
        formated.append(name.lower().capitalize())
    # Order the name
    if len(formated) > 3:
        formatedName = formated[0] + ' ' + formated[1] + ' ' + formated[2] + ' ' + formated[3]
    else:
        formatedName = formated[0] + ' ' + formated[1] + ' ' + formated[2]
    return formatedName

def getID(name, facultyYear):
    # Get the folio by knowing the number of users.
    folio = str(len(UserSurvey.objects.all()) + 1)
    # Format the name and get its initials.
    initials = formatName(name).split(' ')
    # Get the abreviation of the name.
    if len(initials) > 3:
        abrev = initials[2][0] + initials[3][0] + initials[0][0] + initials[1][0]
    else:
        abrev = initials[1][0] + initials[2][0] + initials[0][0] + '0'
    # Generate the id.
    surveyId = facultyYear + abrev + '_' + folio
    return surveyId

def decodeImage(name, facultyYear, image_base64):
    # Decode image in base64 format.
    imgdata = base64.b64decode(image_base64)
    # Format the name of the new image.
    filename = 'usersSign/' + getID(name, facultyYear) + '.jpg'
    # Open file and save it in 'media' directory.
    with open('media/'+filename, 'wb') as f:
        f.write(imgdata)
    return filename

def saveForm(request):
    if request.method == 'POST':

        name = formatName(request.POST['name'])
        age = request.POST['age']
        sex = request.POST['sex']
        kids = request.POST['kids']
        state = request.POST['state']
        facultyYear = request.POST['facultyYear']
        civilStatus = request.POST['civilStatus']
        municipality = request.POST['municipality']
        typeOfResidence = request.POST['typeOfResidence']
        email = request.POST['email']
        occupation = request.POST['occupation']
        typeOfActivity = request.POST['typeOfActivity']
        useOfMask = request.POST['useOfMask']
        typeOfMask = request.POST['typeOfMask']
        semester = request.POST['semester']
        worked = request.POST['worked']
        seriousWorkProblems = request.POST['seriousWorkProblems']
        workDifficulties = request.POST['workDifficulties']
        accessToInternetAndDevices_Doctor = request.POST['accessToInternetAndDevices_Doctor']
        accessToInternetAndDevices_Student = request.POST['accessToInternetAndDevices_Student']
        academicPerformance = request.POST['academicPerformance']
        difficultiesToStudy = request.POST['difficultiesToStudy']
        # Image
        image_base64 = request.POST['image'].replace('data:image/jpeg;base64,', '')
        image = decodeImage(name, facultyYear, image_base64)
        
        if not UserSurvey.objects.filter(email=email).exists():
            try:
                user = UserSurvey(
                    name=name,
                    surveyId=getID(name, facultyYear),
                    email=email,
                    age=age,
                    sex=sex,
                    kids=kids,
                    state=state,
                    municipality=municipality,
                    typeOfResidence=typeOfResidence,
                    factultyYear=facultyYear,
                    civilStatus=civilStatus,
                    occupation=occupation,
                    semester=semester,
                    worked=worked,
                    seriousWorkProblems=seriousWorkProblems,
                    workDifficulties=workDifficulties,
                    accessToInternetAndDevices_Doctor=accessToInternetAndDevices_Doctor,
                    accessToInternetAndDevices_Student=accessToInternetAndDevices_Student,
                    academicPerformance=academicPerformance,
                    difficultiesToStudy=difficultiesToStudy,
                    typeOfActivity=typeOfActivity,
                    useOfMask=useOfMask,
                    typeOfMask=typeOfMask,
                    image=image
                )
                user.save()
                return redirect(reverse('home') + '?ok')
            except:
                return redirect(reverse('home') + '?fail')
        else:
            return redirect(reverse('home') + '?alreadyUsed')
        
    return render(request, 'core/home.html')
