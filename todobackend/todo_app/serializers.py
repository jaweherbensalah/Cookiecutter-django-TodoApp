from rest_framework import serializers
# from django.contrib.auth.models import User
# from rest_framework.authtoken.models import Token
from .models import ToDo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToDo
        fields = ('id', 'task_title', 'task_description', 'completed')



# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'password']
#         extra_kwargs = {'password': {'write_only': True, 'required': True}}
#         #create a new user and authenticate:
#         #write only will hide the password when it's created
        
#         #extra_kwargs = {'password': {'write_only': True, 'required':True}}
#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         pk=user.id
#         user1 = User.objects.get(id=pk)
#         Token.objects.create(user=user1)
#         return user
