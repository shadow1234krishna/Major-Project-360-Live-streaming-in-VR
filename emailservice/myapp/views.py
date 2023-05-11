# from django.shortcuts import render

# Create your views here.

from .tasks import *

def send_email(request):
    email = request.POST.get('email')

