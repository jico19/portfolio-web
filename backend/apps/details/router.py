from rest_framework.routers import DefaultRouter
from . import viewset


router = DefaultRouter()
router.register(f"personal-info", viewset.PersonalInfoViewSets)
router.register(f"tech", viewset.TechViewSets)
router.register(f"project", viewset.ProjectViewSets)
router.register(f"certification", viewset.CertificationViewSets)
router.register(f"experience", viewset.ExperienceViewSets)
router.register(f"testimonials", viewset.TestimonialsViewSets)


urlpatterns = []


urlpatterns += router.urls