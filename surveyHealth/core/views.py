from django.shortcuts import render
from .models import UserSurvey

# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def saveForm(request):
    if request.method == 'POST':
        print("SUBMITED")
        name = request.POST['name']
        email = request.POST['email']

        user = UserSurvey(name=name, email=email)

        user.save()
        
    return render(request, 'core/home.html')