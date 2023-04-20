from django.shortcuts import render
from django.views.generic import TemplateView

class MainPage(TemplateView):
    template_name = "django_components_app/mainPage.html"