from django.db import models

class ToDo(models.Model):
    # task_title task_description created_at updated_at  completed
    task_title = models.CharField(max_length=200, default="")
    task_description = models.TextField(default="", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.task_title

  