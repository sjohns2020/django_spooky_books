from django.shortcuts import render

# Create your views here.


# Home Page
def home(request):
    return render(request, "index.html")
