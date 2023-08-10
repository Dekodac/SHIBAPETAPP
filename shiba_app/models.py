from django.db import models
from users_app.models import User

class Shiba(models.Model):
    name = models.CharField(max_length=100)
    eyecolor = models.CharField(max_length=8)
    furcolor = models.CharField(max_length=8)
    accessories = models.CharField(max_length=100)
    personality = models.TextField()
    experience_points = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name
    