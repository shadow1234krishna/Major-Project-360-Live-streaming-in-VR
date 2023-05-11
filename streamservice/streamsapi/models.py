
from django.db import models

# Create your models here.
class Matches(models.Model):
    title=models.CharField(max_length=150)
    #match_id=models.IntegerField(primary_key="")
    description=models.TextField()
    embed_code=models.URLField()
    status=models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = 'Matches'
        ordering=['-id']
    
    def __str__(self):
        return self.title
