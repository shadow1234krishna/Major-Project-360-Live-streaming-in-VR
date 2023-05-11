from django.urls import path
from .views import ListMatches,DetailMatches

urlpatterns=[
    path('matches',ListMatches.as_view(),name='matches'),
    path('matches/<int:pk>/',DetailMatches.as_view(),name='singlematches'),
]