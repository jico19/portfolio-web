from django.contrib import admin
from . import models


admin.site.register(models.PersonalInfo)
admin.site.register(models.Tech)
admin.site.register(models.Projects)
admin.site.register(models.Certification)
admin.site.register(models.Experience)
admin.site.register(models.Testimonial)