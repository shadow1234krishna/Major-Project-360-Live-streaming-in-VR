from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from .models import Matches

class MatchesSerializer(serializers.ModelSerializer):
    class Meta:
        fields=(
            'id',
            # 'match_id',
            'description',
            'embed_code',
            'status'
        )
        model = Matches