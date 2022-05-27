from django.contrib import admin
from .models import  ToDo


# Register your models here.
admin.site.site_header="Todo"
admin.site.site_title="Todo"
admin.site.index_title="Todo"



class TodoAdmin(admin.ModelAdmin):
    list_display = ('id','task_title','task_description','created_at','updated_at','completed')
    search_fields=('task_title','task_description','created_at','updated_at','completed'),#créer une barre de recherche pour l'admin
    
admin.site.register(ToDo, TodoAdmin)
