from django.db import models
from users_app.models import User
from shiba_app.models import Shiba

class OwnedShiba(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.ForeignKey(Shiba, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}'s {self.name}"

class UserInventory(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    owned_shibas = models.ManyToManyField(OwnedShiba)

    def __str__(self):
        return f"Inventory for {self.user.username}"
