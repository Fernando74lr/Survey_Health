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
def getQuestions(request):
    # Questions part 1.
    pt1_1 = request.POST['pt1_1']
    pt1_2 = request.POST['pt1_2']
    pt1_3 = request.POST['pt1_3']
    pt1_4 = request.POST['pt1_4']
    pt1_5 = request.POST['pt1_5']
    pt1_6 = request.POST['pt1_6']
    pt1_7 = request.POST['pt1_7']
    pt1_8 = request.POST['pt1_8']
    pt1_9 = request.POST['pt1_9']
    pt1_10 = request.POST['pt1_10']
    pt1_11 = request.POST['pt1_11']
    pt1_12 = request.POST['pt1_12']
    pt1_13 = request.POST['pt1_13']
    pt1_14 = request.POST['pt1_14']
    pt1_15 = request.POST['pt1_15']
    pt1_16 = request.POST['pt1_16']
    pt1_17 = request.POST['pt1_17']
    pt1_18 = request.POST['pt1_18']
    pt1_19 = request.POST['pt1_19']
    pt1_20 = request.POST['pt1_20']
    pt1_21 = request.POST['pt1_21']
    # Questions part 2.
    pt2_Intense_1 = request.POST['pt2_Intense_1']
    pt2_Intense_2 = request.POST['pt2_Intense_2']
    pt2_Moderated_1 = request.POST['pt2_Moderated_1']
    pt2_Moderated_2 = request.POST['pt2_Moderated_2']
    pt2_Hike_1 = request.POST['pt2_Hike_1']
    pt2_Hike_2 = request.POST['pt2_Hike_2']
    pt2_Seated_1 = request.POST['pt2_Seated_1']
    # Questions part 3.
    pt3_1 = request.POST['pt3_1']
    pt3_2 = request.POST['pt3_2']
    pt3_3 = request.POST['pt3_3']
    pt3_4 = request.POST['pt3_4']
    pt3_5 = request.POST['pt3_5']
    pt3_6 = request.POST['pt3_6']
    pt3_7 = request.POST['pt3_7']
    pt3_8 = request.POST['pt3_8']
    pt3_9 = request.POST['pt3_9']
    pt3_10 = request.POST['pt3_10']
    # Questions part 4.
    pt4_1 = request.POST['pt4_1']
    pt4_2 = request.POST['pt4_2']
    pt4_3 = request.POST['pt4_3']
    pt4_4 = request.POST['pt4_4']
    pt4_5 = request.POST['pt4_5']
    pt4_6 = request.POST['pt4_6']
    # Questions part 5.
    pt5_1 = request.POST['pt5_1']
    pt5_2 = request.POST['pt5_2']
    pt5_3 = request.POST['pt5_3']
    pt5_4 = request.POST['pt5_4']
    pt5_5 = request.POST['pt5_5']
    pt5_6 = request.POST['pt5_6']
    pt5_5 = request.POST['pt5_5']
    pt5_6 = request.POST['pt5_6']
    pt5_7 = request.POST['pt5_7']
    pt5_8 = request.POST['pt5_8']

    return (pt1_1, pt1_2, pt1_3, pt1_4, pt1_5, pt1_6, pt1_7, pt1_8, pt1_9, pt1_10, pt1_11, pt1_12, pt1_13, pt1_14, pt1_15, pt1_16, pt1_17, pt1_18, pt1_19, pt1_20, pt1_21, pt2_Intense_1, pt2_Intense_2, pt2_Moderated_1, pt2_Moderated_2, pt2_Hike_1, pt2_Hike_2, pt2_Seated_1, pt3_1, pt3_2, pt3_3, pt3_4, pt3_5, pt3_6, pt3_7, pt3_8, pt3_9, pt3_10, pt4_1, pt4_2, pt4_3, pt4_4, pt4_5, pt4_6, pt5_1, pt5_2, pt5_3, pt5_4, pt5_5, pt5_6, pt5_7, pt5_8)

# Get all the data from the request.
def getGeneralData(request):
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
        data = formatUndefinedField(list(getGeneralData(request)))
        # Get all the questions.
        questions = formatUndefinedField(list(getQuestions(request)))
        
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
                    image=data[23],
                    pt1_1=questions[0],
                    pt1_2=questions[1],
                    pt1_3=questions[2],
                    pt1_4=questions[3],
                    pt1_5=questions[4],
                    pt1_6=questions[5],
                    pt1_7=questions[6],
                    pt1_8=questions[7],
                    pt1_9=questions[8],
                    pt1_10=questions[9],
                    pt1_11=questions[10],
                    pt1_12=questions[11],
                    pt1_13=questions[12],
                    pt1_14=questions[13],
                    pt1_15=questions[14],
                    pt1_16=questions[15],
                    pt1_17=questions[16],
                    pt1_18=questions[17],
                    pt1_19=questions[18],
                    pt1_20=questions[19],
                    pt1_21=questions[20],
                    pt2_Intense_1=questions[21],
                    pt2_Intense_2=questions[22],
                    pt2_Moderated_1=questions[23],
                    pt2_Moderated_2=questions[24],
                    pt2_Hike_1=questions[25],
                    pt2_Hike_2=questions[26],
                    pt2_Seated_1=questions[27],
                    pt3_1=questions[28],
                    pt3_2=questions[29],
                    pt3_3=questions[30],
                    pt3_4=questions[31],
                    pt3_5=questions[32],
                    pt3_6=questions[33],
                    pt3_7=questions[34],
                    pt3_8=questions[35],
                    pt3_9=questions[36],
                    pt3_10=questions[37],
                    pt4_1=questions[38],
                    pt4_2=questions[39],
                    pt4_3=questions[40],
                    pt4_4=questions[41],
                    pt4_5=questions[42],
                    pt4_6=questions[43],
                    pt5_1=questions[44],
                    pt5_2=questions[45],
                    pt5_3=questions[46],
                    pt5_4=questions[47],
                    pt5_5=questions[48],
                    pt5_6=questions[49],
                    pt5_7=questions[50],
                    pt5_8=questions[51]
                )
                # Save the user in DB.
                user.save()
                return redirect(reverse('home') + '?ok')
            except:
                return redirect(reverse('home') + '?fail')
        else:
            return redirect(reverse('home') + '?alreadyUsed')
        
    return render(request, 'core/home.html')