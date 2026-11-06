function validateNom(nom) {
    const error = document.getElementById('nom_error');

    if (nom.value.length < 2 || nom.value.length > 30) {
        error.textContent = "Le nom doit être entre 2 et 30 caractères";
    } else {
        error.textContent = "";
    }
}

function validatePrenom(prenom) {
    const error = document.getElementById('prenom_error');

    if (prenom.value.length < 2 || prenom.value.length > 30) {
        error.textContent = "Le prénom doit être entre 2 et 30 caractères";
    } else {
        error.textContent = "";
    }
}

function validateEmail(email) {
    const error = document.getElementById('email_error');

    if (!email.checkValidity() ) {
        error.textContent = "L'email doit contenir un @ précédé ET suivi d'au moins 2 caractères.";
    } else {
        error.textContent = "";
    }
}

function validateTel(tel) {
    const error = document.getElementById('tel_error');

    if (!tel.checkValidity()) {
        error.textContent = "Le numéro de téléphone doit être de la forme 06.12.34.56.78";
    } else {
        error.textContent = "";
    }
}

function validateMsg(msg) {
    const error = document.getElementById('msg_error');

    if (tel.value.length < 20 || tel.value.length > 500) {
        error.textContent = "votre message doit être contenu entre 20 et 500 caractères.";
    } else {
        error.textContent = "";
    }
}

// Exécution du script seulement après que le DOM soit complètement chargé
document.addEventListener("DOMContentLoaded", function() {
    // Récupération des éléments du formulaire pour pouvoir les manipuler facilement
    const form = document.getElementById("contact-form");
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const msg = document.getElementById('message');
    const loader = document.getElementById('loader');

    // Validation en temps réel : dès que l'utilisateur saisit dans le champ Nom
    nom.addEventListener('input', () => validateNom(nom));
    prenom.addEventListener('input', () => validatePrenom(prenom));
    email.addEventListener('input', () => validateEmail(email));
    tel.addEventListener('input', () => validateTel(tel));
    msg.addEventListener('input', () => validateMsg(msg));


    // Validation du formulaire au moment de l'envoi
    form.addEventListener('submit', function(e) {
        validateNom(nom); // Vérifie que le champ Nom est correct avant l'envoi

       const error = document.getElementById('nom-error'); // Récupère le message d'erreur
        if(error.textContent !== "") {
            e.preventDefault(); // Bloque l'envoi si une erreur est présente
        } else if(loader) {
            loader.style.display = "block"; // Affiche le loader pour indiquer que le formulaire est en cours d'envoi
        }
        
    });


    form.addEventListener('submit', function(e) {
        validatePrenom(prenom); // Vérifie que le champ Nom est correct avant l'envoi

       const error = document.getElementById('prenom-error'); // Récupère le message d'erreur
        if(error.textContent !== "") {
            e.preventDefault(); // Bloque l'envoi si une erreur est présente
        } else if(loader) {
            loader.style.display = "block"; // Affiche le loader pour indiquer que le formulaire est en cours d'envoi
        }
    });

    
    form.addEventListener('submit', function(e) {
        validateEmail(email);

       const error = document.getElementById('email-error'); // Récupère le message d'erreur
        if(error.textContent !== "") {
            e.preventDefault(); // Bloque l'envoi si une erreur est présente
        } else if(loader) {
            loader.style.display = "block"; // Affiche le loader pour indiquer que le formulaire est en cours d'envoi
        }
    });


    form.addEventListener('submit', function(e) {
        validateTel(tel);

       const error = document.getElementById('tel-error'); // Récupère le message d'erreur
        if(error.textContent !== "") {
            e.preventDefault(); // Bloque l'envoi si une erreur est présente
        } else if(loader) {
            loader.style.display = "block"; // Affiche le loader pour indiquer que le formulaire est en cours d'envoi
        }
    });


    form.addEventListener('submit', function(e) {
        validateMsg(msg);

       const error = document.getElementById('msg-error'); // Récupère le message d'erreur
        if(error.textContent !== "") {
            e.preventDefault(); // Bloque l'envoi si une erreur est présente
        } else if(loader) {
            loader.style.display = "block"; // Affiche le loader pour indiquer que le formulaire est en cours d'envoi
        }
    });


});