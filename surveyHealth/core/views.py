from django.shortcuts import render, redirect
from django.urls import reverse
from .models import UserSurvey
from django.core.files.base import ContentFile

# Create your views here.
def home(request):
    return render(request, 'core/home.html')
#user = User.objects.filter(name='ImHarvol').exists()
def saveForm(request):
    if request.method == 'POST':
        print("SUBMITED")
        name = request.POST['name']
        email = request.POST['email']
        image = request.FILES['image']

        if not UserSurvey.objects.filter(email=email).exists():
            try:
                user = UserSurvey(name=name, email=email, image=image)
                user.save()
                return redirect(reverse('home') + '?ok')
            except:
                return redirect(reverse('home') + '?fail')
        else:
            return redirect(reverse('home') + '?alreadyUsed')
        
    return render(request, 'core/home.html')