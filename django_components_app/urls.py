from django.urls import path

from . import views

app_name="components"
urlpatterns = [
    path('', views.MainPage.as_view(), name="main_page"),
    path('simpleComponentTests', views.SimpleComponentTests.as_view(), name="simpleComponentTests"),
    path('advancedComponentTests', views.AdvancedComponentTests.as_view(), name="advancedComponentTests"),
]
