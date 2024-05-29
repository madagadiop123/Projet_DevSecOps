document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone_number').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validation des champs (vous pouvez ajouter d'autres validations selon vos besoins)
    if (firstName.trim() === '') {
        alert('Veuillez saisir votre prénom');
        return;
    }

    if (lastName.trim() === '') {
        alert('Veuillez saisir votre nom');
        return;
    }

    if (email.trim() === '') {
        alert('Veuillez saisir votre adresse e-mail');
        return;
    }

    // Validation d'un format d'email basique
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Veuillez saisir une adresse e-mail valide');
        return;
    }

    if (phoneNumber.trim() === '') {
        alert('Veuillez saisir votre numéro de téléphone');
        return;
    }

    // Validation d'un numéro de téléphone basique
    var phonePattern = /^\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert('Veuillez saisir un numéro de téléphone valide (9 chiffres) sans indicateur de pays');
        return;
    }

    if (username.trim() === '') {
        alert('Veuillez choisir un nom d\'utilisateur');
        return;
    }

    if (password.trim() === '') {
        alert('Veuillez saisir votre mot de passe');
        return;
    }

    // Si toutes les validations sont passées, vous pouvez envoyer le formulaire
    // Exécuter une requête AJAX pour envoyer les données d'inscription au backend Django
    // Vous devez implémenter cette partie selon vos besoins


});
