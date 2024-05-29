from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect



def login_view(request):
    return render(request, 'my_login.html')

def inscription(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirection vers la page de connexion après inscription réussie
            return redirect('login/')
    else:
        form = UserCreationForm()
    return render(request, 'inscription.html', {'form': form})


def home(request):
    return render(request, 'home.html')