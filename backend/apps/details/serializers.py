from rest_framework import serializers
from .models import PersonalInfo, Tech, Projects, Certification, Experience, Testimonial

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'

class TechSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tech
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechSerializer(many=True, read_only=True)
    class Meta:
        model = Projects
        fields = '__all__'

class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class TestimonialSerialier(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'
