import json
from typing import List
from unittest import result
from urllib import response
from rest_framework.test import APITestCase
from django.urls import reverse
from streamsapi. models import Matches
from django.http import Http404, HttpResponse, HttpResponseForbidden
from rest_framework import status


class TestMatches(APITestCase):
    url = "api/streams/matches"
    #Test for Checking if post method is working
    def test_post_Matches(self):

        sample_matches={'description':'sskjs','embed_code':'https://wwww.sss.com'}
        response=self.client.post(reverse('matches'),sample_matches)
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)

    #Test for validating created objects
    def test_should_create_Matches(self):
        prev_matches_count=Matches.objects.all().count()
        sample_matches={'description':'sskjs','embed_code':'https://wwww.sss.com'}
        response=self.client.post(reverse('matches'),sample_matches)
        self.assertEqual(Matches.objects.all().count(),prev_matches_count+1)
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        self.assertEqual(response.data['description'],'sskjs')
        self.assertEqual(response.data['embed_code'],'https://wwww.sss.com')
    
    #Test for Checking if get request is working
    def test_retrieves_matches(self):
        response=self.client.get(reverse('matches'))
        self.assertEqual(response.status_code,status.HTTP_200_OK)
        # self.assertIsInstance(response.data['result'],list)




