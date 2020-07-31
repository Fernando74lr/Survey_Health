from django.shortcuts import render
from .models import UserSurvey
from django.core.files.base import ContentFile

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def saveForm(request):
    if request.method == 'POST':
        print("SUBMITED")
        name = request.POST['name']
        email = request.POST['email']
        image = request.FILES['image']

        user = UserSurvey(name=name, email=email, image=image)

        user.save()
        
    return render(request, 'core/home.html')