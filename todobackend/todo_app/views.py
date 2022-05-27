from rest_framework import viewsets          
from todo_app.serializers import TodoSerializer 
from todo_app.models import ToDo                     
# from django.contrib.auth.models import User

class TodoViewSet(viewsets.ModelViewSet):       
    serializer_class = TodoSerializer         
    queryset = ToDo.objects.all() 

# class UserViewSet(viewsets.ModelViewSet):       
#     serializer_class = UserSerializer         
#     queryset = User.objects.all()   

