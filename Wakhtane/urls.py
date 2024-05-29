from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('inscription/', views.inscription, name='inscription'),
    path('', views.home, name='home'),
    # Assurez-vous que 'login_view' est une fonction définie dans vos vues

]

