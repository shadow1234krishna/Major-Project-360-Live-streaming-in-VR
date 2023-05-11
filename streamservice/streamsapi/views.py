from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics

#from EcommerceApi.DjangoApi.models import Matches
from .models import Matches
from .serializers import MatchesSerializer

# Create your views here.
class ListMatches(generics.ListCreateAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializer

class DetailMatches(generics.RetrieveUpdateDestroyAPIView):
    queryset = Matches.objects.all()
    serializer_class = MatchesSerializer
