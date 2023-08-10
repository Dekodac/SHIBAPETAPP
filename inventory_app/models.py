from django.db import models
from users_app.models import User




class UsersShiba(models.Model):
    name = models.CharField(max_length=100)
    appearance = models.TextField()
    personality = models.TextField()
    experience = models.PositiveIntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name