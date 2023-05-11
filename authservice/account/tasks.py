from __future__ import absolute_import, unicode_literals
from celery import shared_task
from django.core.mail import send_mail
from djangoauthapi1 import settings

@shared_task(name='send_greeting_email')
def send_greeting_email(email):
    pass
    # subject = 'Welcome to My App!'
    # message = 'Thank you for signing up for My App'
    # from_email = settings.EMAIL_HOST_USER
    # recipient_list = [email]
    # send_mail(subject, message, from_email, recipient_list)
@shared_task(name='send_invite_email')
def send_invite_email(email):
    pass