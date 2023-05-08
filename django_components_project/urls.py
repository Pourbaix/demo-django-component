from django.urls import path, include

urlpatterns = [
    path('django_components/', include('django_components_app.urls'))
]
