from rest_framework import viewsets, response
from rest_framework.decorators import action
from . import serializers
from . import models



class PersonalInfoViewSets(viewsets.ModelViewSet):
    queryset = models.PersonalInfo.objects.all()
    serializer_class = serializers.PersonalInfoSerializer

    @action(detail=False, methods=['GET'])
    def hello_world(self, request):
        return response.Response("Hello Hello world!")

class TechViewSets(viewsets.ModelViewSet):
    queryset = models.Tech.objects.all()
    serializer_class = serializers.TechSerializer
    
    @action(detail=False, methods=['GET'])
    def hello_world(self, request):
        return response.Response("Hello!")


class ProjectViewSets(viewsets.ModelViewSet):
    queryset = models.Projects.objects.all()
    serializer_class = serializers.ProjectSerializer

class CertificationViewSets(viewsets.ModelViewSet):
    queryset = models.Certification.objects.all()
    serializer_class = serializers.CertificationSerializer
    
class ExperienceViewSets(viewsets.ModelViewSet):
    queryset = models.Experience.objects.all()
    serializer_class = serializers.ExperienceSerializer
    
class TestimonialsViewSets(viewsets.ModelViewSet):
    queryset = models.Testimonial.objects.all()
    serializer_class = serializers.TestimonialSerialier