// Valider la saisie des champs
function validateForm() {
  var firstName = document.getElementById("exampleInputUsername1").value;
  var lastName = document.getElementById("exampleInputLastName1").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var password = document.getElementById("exampleInputPassword1").value;
  var terms = document.getElementById("exampleCheck1").checked;

  if (firstName === "" || lastName === "" || email === "" || password === "" || !terms) {
    alert("Veuillez remplir tous les champs.");
    return false;
  }

  // Vérification du nom
  if (firstName.length < 3 || !/^[a-zA-Z]+$/.test(firstName)) {
    alert("Le prénom doit comporter au moins 3 caractères et ne doit contenir que des lettres.");
    return false;
  }

  // Vérification du nom de famille
  if (lastName.length < 3 || !/^[a-zA-Z]+$/.test(lastName)) {
    alert("Le nom de famille doit comporter au moins 3 caractères et ne doit contenir que des lettres.");
    return false;
  }

  // Vérification du mot de passe
  if (!/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
    alert("Le mot de passe doit comporter au moins un chiffre et un caractère spécial.");
    return false;
  }
  // Validation réussie
  return true;
}

// Gestion de la soumission du formulaire
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("yourFormId"); // Remplacez "yourFormId" par l'ID réel de votre formulaire

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Validation du formulaire
    if (!validateForm()) {
      return;
    }

    var firstName = document.getElementById("exampleInputUsername1").value;
    var lastName = document.getElementById("exampleInputLastName1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

    console.log("Prénom :", firstName);
    console.log("Nom de famille :", lastName);
    console.log("Email :", email);
    console.log("Mot de passe :", password);

    
  });
});
