from django.urls import path

from . import views

app_name="django_components_app"
urlpatterns = [
    path('', views.MainPage.as_view(), name="main_page"),
]
