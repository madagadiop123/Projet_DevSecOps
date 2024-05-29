document.addEventListener('DOMContentLoaded', function() {
    // Ajouter un écouteur d'événements de soumission de formulaire
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Récupérer les valeurs des champs de saisie
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Vérifier si les champs sont vides
        if (username === '' || password === '') {
            // Afficher un message d'erreur
            var errorMessage = document.createElement('p');
            errorMessage.textContent = 'Please fill in both fields';
            errorMessage.style.color = 'red';
            document.getElementById('loginForm').appendChild(errorMessage);

            // Empêcher la soumission du formulaire
            event.preventDefault();
        }
    });
});
