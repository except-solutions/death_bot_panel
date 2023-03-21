from django.db import models


class Quote(models.Model):
    text = models.TextField()
    author = models.CharField(max_length=50)
    active = models.BooleanField(default=True)
