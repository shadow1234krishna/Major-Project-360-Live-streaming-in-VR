from __future__ import absolute_import, unicode_literals
from celery import shared_task
from django.core.mail import send_mail
from myproject import settings

@shared_task(name='send_greeting_email')
def send_greeting_email(email):
    subject = 'Welcome to My App!'
    message = 'Thank you for signing up for My App. We hope you enjoy using our service!'
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, from_email, recipient_list)

@shared_task(name='send_invite_email')
def send_invite_email(email):
    subject = 'CONGRATS...'
    message = 'We would notifiy you that you have been added as admin streamer on our site'
    from_email = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject, message, from_email, recipient_list)
