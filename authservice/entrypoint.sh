#!/bin/sh

python manage.py makemigrations
python manage.py migrate --noinput
echo "from account.models import User;
if User.objects.filter(email = '$DJANGO_SUPERUSER_EMAIL').exists():User.objects.get(email='$DJANGO_SUPERUSER_EMAIL').delete();" | python manage.py shell
python manage.py createsuperuser --noinput --name $DJANGO_SUPERUSER_USERNAME --email $DJANGO_SUPERUSER_EMAIL
exec "$@"