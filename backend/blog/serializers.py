from rest_framework import serializers
from .models import Post, Category

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class PostSerializers(serializers.ModelSerializer):
    # category = CategorySerializers()
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'slug', 'category']