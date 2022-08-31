from django.urls import path, include
from .views import home
from rest_framework.routers import DefaultRouter
from .views import PostViewset, CategoryViewset

router = DefaultRouter()
router.register('post', PostViewset, basename='post')

urlpatterns = [
    path('', home, name='home'),

    # router
    path('', include(router.urls))
]