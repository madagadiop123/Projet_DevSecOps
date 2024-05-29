from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('', include('Wakhtane.urls')),

    # Inclure les URLs de l'application Wakhtane
]
