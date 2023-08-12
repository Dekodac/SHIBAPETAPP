from django.db import models
from users_app.models import User
from django.core import validators

class Shiba(models.Model):


    def validate_alpha(value):
        if not value.isalpha():
            raise validators.ValidationError("Name can only contain alphabetical characters.")

    name = models.CharField(max_length=50, validators=[validate_alpha])
    eyecolor = models.CharField(max_length=10, validators=[validate_alpha])
    furcolor = models.CharField(max_length=10, validators=[validate_alpha])
    personality = models.TextField(validators=[validate_alpha])
    experience_points = models.PositiveIntegerField(default=0)
    
    top_hat = models.BooleanField(default=False)
    bow_tie = models.BooleanField(default=False)
    glasses = models.BooleanField(default=False)
    muzzle = models.BooleanField(default=False)
    hair_clip = models.BooleanField(default=False)
    dramatic_mustache = models.BooleanField(default=False)
    cane = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name
