from django.shortcuts import render, redirect
from django.urls import reverse
from .models import UserSurvey
import base64
import json

# Home view.
def home(request):
    return render(request, 'core/home.html', {'numUsers': str(len(UserSurvey.objects.all()) + 1)})

# Format the name with the first letter capitalized in each word.
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

# Generate the ID for the new user.
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

# Decode the image in base64 and saves it as the ID value.
def decodeImage(name, facultyYear, image_base64):
    # Decode image in base64 format.
    imgdata = base64.b64decode(image_base64)
    # Format the name of the new image.
    filename = 'usersSignature/' + getID(name, facultyYear) + '.jpg'
    # Open file and save it in 'media' directory.
    with open('media/'+filename, 'wb') as f:
        f.write(imgdata)
    return filename

# Check the format of the image.
def imageFormat(base64):
    if 'jpeg' in base64:
        return base64.replace('data:image/jpeg;base64,', '')
    if 'jpg' in base64:
        return base64.replace('data:image/jpg;base64,', '')
    if 'png' in base64:
        return base64.replace('data:image/png;base64,', '')

# Get all the data from the request.
def getData(request):
    facultyYear = request.POST['facultyYear']

    # Name.
    try:
        name = formatName(request.POST['name'])
    except:
        return redirect(reverse('home') + '?name')
    
    # Image.
    image_base64 = request.POST['image']
    try:
        image = decodeImage(name, facultyYear, imageFormat(image_base64))
    except:
        return redirect(reverse('home') + '?image')

    # ID.
    surveyId = getID(name, facultyYear)

    # General data.
    age = request.POST['age']
    sex = request.POST['sex']
    kids = request.POST['kids']
    state = request.POST['state']
    civilStatus = request.POST['civilStatus']
    municipality = request.POST['municipality'].lower().capitalize()
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

    return (name, surveyId, email, age, sex, kids, state, municipality, typeOfResidence, facultyYear, civilStatus, occupation, semester, worked, seriousWorkProblems, workDifficulties, accessToInternetAndDevices_Doctor, accessToInternetAndDevices_Student, academicPerformance, difficultiesToStudy, typeOfActivity, useOfMask, typeOfMask, image)

# Change value 'undefined' for 'No aplica'.
def formatUndefinedField(dataList):
    for item in dataList:
        if item == 'undefined':
            dataList[dataList.index(item)] = 'No aplica'
    return tuple(dataList)

def saveForm(request):
    if request.method == 'POST':

        # Get all the data.
        data = formatUndefinedField(list(getData(request)))

        # If email doen't exists, create new user.
        if not UserSurvey.objects.filter(email=data[2]).exists():
            try:
                # Create a new user.
                user = UserSurvey(
                    name=data[0],
                    surveyId=data[1],
                    email=data[2],
                    age=data[3],
                    sex=data[4],
                    kids=data[5],
                    state=data[6],
                    municipality=data[7],
                    typeOfResidence=data[8],
                    facultyYear=data[9],
                    civilStatus=data[10],
                    occupation=data[11],
                    semester=data[12],
                    worked=data[13],
                    seriousWorkProblems=data[14],
                    workDifficulties=data[15],
                    accessToInternetAndDevices_Doctor=data[16],
                    accessToInternetAndDevices_Student=data[17],
                    academicPerformance=data[18],
                    difficultiesToStudy=data[19],
                    typeOfActivity=data[20],
                    useOfMask=data[21],
                    typeOfMask=data[22],
                    image=data[23]
                )
                # Save the user in DB.
                user.save()
                return redirect(reverse('home') + '?ok')
            except:
                return redirect(reverse('home') + '?fail')
        else:
            return redirect(reverse('home') + '?alreadyUsed')
        
    return render(request, 'core/home.html')