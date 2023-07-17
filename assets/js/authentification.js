// Fonction pour gérer l'inscription


document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("yourFormId"); // Remplacez "yourFormId" par l'ID réel de votre formulaire

  form.addEventListener("submit", async function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    var firstName = document.getElementById("exampleInputUsername1").value;
    var lastName = document.getElementById("exampleInputLastName1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

    console.log("Prénom :", firstName);
    console.log("Nom de famille :", lastName);
    console.log("Email :", email);
    console.log("Mot de passe :", password);

    // Vérification de l'email de l'utilisateur
    try {
      const response = await fetch('http://localhost:2200/voiture/utilisateur/fatou');
      if (!response.ok) {
        throw new Error('Erreur de réponse du serveur');
      }
      
      const data = await response.json();
      console.log(data);
//verification de l'email
  data.forEach(element => {
    console.log(element.email);
    if (element.email === email) {
      emailExists = true;
    }else{
      emailExists=false
    }
  });

  if (emailExists) {
    const pElement = document.createElement('p');
    const message= document.querySelector('#message')
    pElement.textContent = 'le mail existe déja';
    pElement.style.color='red',
   //  pElement.style.fontSize='bold'

    message.appendChild(pElement);
 } else {
    console.log("se mail n'existe pas");

     // Hachage du mot de passe
     var hashedPassword = CryptoJS.SHA256(password).toString();


      // Ajout d'un nouvel utilisateur avec mot de passe haché
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword
      };


    const postResponse = await fetch('http://localhost:2200/voiture/utilisateur/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });

        if (!postResponse.ok) {
          throw new Error('Erreur lors de l\'ajout de l\'utilisateur');
        }
  }
    } catch (error) {
      console.error('Une erreur s\'est produite:', error);
    }
  });
});
  