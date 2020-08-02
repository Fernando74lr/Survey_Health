from django.shortcuts import render, redirect
from django.urls import reverse
from .models import UserSurvey
import base64
import json

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def resultsInfo(request):
    users = UserSurvey.objects.all()

    emails = ''
    for user in users:
        emails+= str(user.email) + ','
    
    return render(request, 'core/results.html', {'emails' : emails})

def saveForm(request):
    if request.method == 'POST':
        print("SUBMITED")
        name = request.POST['name']
        email = request.POST['email']
        imgstring = request.POST['image'].replace('data:image/jpeg;base64,', '')

        imgdata = base64.b64decode(imgstring)
        filename = 'usersSign/sign' + name[0] + '.jpg'  # I assume you have a way of picking unique filenames
        with open('media/'+filename, 'wb') as f:
            f.write(imgdata)

        if not UserSurvey.objects.filter(email=email).exists():
            try:
                user = UserSurvey(name=name, email=email, image=filename)
                user.save()
                return redirect(reverse('home') + '?ok')
            except:
                return redirect(reverse('home') + '?fail')
        else:
            return redirect(reverse('home') + '?alreadyUsed')
        
    return render(request, 'core/home.html')
