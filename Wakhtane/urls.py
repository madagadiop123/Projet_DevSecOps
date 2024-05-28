from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),  # Assurez-vous que 'login_view' est une fonction définie dans vos vues

]

