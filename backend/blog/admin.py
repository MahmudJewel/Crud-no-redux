from django.contrib import admin
from .models import Post, Category
# Register your models here.

lst=[Post, Category]

admin.site.register(lst)
