from django.shortcuts import render
from django.http import HttpResponse
from .serializers import CategorySerializers, PostSerializers
from .models import Category, Post
from rest_framework import viewsets
# Create your views here.

def home(request):
    return HttpResponse("Home Page for Blog API")


class PostViewset(viewsets.ModelViewSet):
	"""
	This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
	"""
	serializer_class = PostSerializers
	queryset = Post.objects.all()

class CategoryViewset(viewsets.ModelViewSet):
	"""
	This viewset automatically provides `list`, `create`, `retrieve`, `update` and `destroy` actions.
	"""
	serializer_class = CategorySerializers
	queryset = Category.objects.all()