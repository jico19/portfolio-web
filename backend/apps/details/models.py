from django.db import models

# Create your models here.


class PersonalInfo(models.Model):
    name = models.CharField(max_length=200)
    dob = models.DateField()
    about = models.TextField()
    image = models.ImageField(upload_to="me/")

class Tech(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    icon = models.CharField(max_length=100, blank=True)

    
    def __str__(self):
        return f"{self.name}"

class Projects(models.Model):
    name = models.CharField(max_length=200, null=False)
    decription = models.TextField()
    link = models.URLField(max_length=255, blank=True)
    image = models.ImageField(upload_to="project_imgs/", blank=True, null=True)
    technologies = models.ManyToManyField(Tech, related_name="project")
    
    def __str__(self):
        return f"{self.project_name}"

class Certification(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="certification_imgs/")
    date_completed = models.DateField()
    
class Experience(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField() # Date conducted 
    
    
class Testimonial(models.Model):
    class TagChoices(models.TextChoices):
        WEB = "WEB", "Web Development"
        MOBILE = "MOBILE", "Mobile Development"
    

    name = models.CharField(max_length=200)
    tag = models.CharField(max_length=200, choices=TagChoices)
    description = models.TextField()
    date = models.DateField() 
