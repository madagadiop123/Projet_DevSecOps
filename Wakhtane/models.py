from django.contrib.auth.models import User
from django.db import models
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    shared_secret = models.CharField(max_length=64)  # Stocke le secret partagé

# Create your models here.
