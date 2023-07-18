function validateForm() {
  var username = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;
  var errorElement = document.getElementById('error-message');

  // Valider l'e-mail
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(username)) {
    // Validation de l'e-mail échouée, afficher un message d'erreur
    errorElement.innerText = 'E-mail incorrect';
    errorElement.style.color = 'red';
    return false; // Empêcher la soumission du formulaire
  }

  // Valider le mot de passe
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    // Validation du mot de passe échouée, afficher un message d'erreur
    errorElement.innerText = 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère spécial et avoir une longueur minimale de 8 caractères.';
    errorElement.style.color = 'red';
    return false; // Empêcher la soumission du formulaire
  }

  // Les critères de validation sont respectés, soumettre le formulaire
  return true;
}