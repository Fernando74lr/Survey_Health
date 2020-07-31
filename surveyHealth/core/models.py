from django.db import models

# Create your models here.
class UserSurvey(models.Model):
    name = models.CharField(max_length=200, blank=False, verbose_name="Name")
    email = models.EmailField(verbose_name="Email", blank=False)
    image = models.ImageField(blank=False, upload_to='usersSign', verbose_name="Image")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Date and time of creation")
    updated = models.DateTimeField(auto_now=True, verbose_name="Date and time of last change")

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"
        ordering = ["-created"]

    def __str__(self):
        return self.name