//Authentification

// Importer les modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');

// Initialiser l'application Express
const app = express();
app.use(bodyParser.json());

// Route pour l'inscription d'un utilisateur
app.post('/inscription', (req, res) => {
  // Récupérer les données de la requête
  const { nom,prenom, email, motDePasse } = req.body;

  // Vérifier si les données requises sont fournies
  if (!nom || !prenom || !email || !motDePasse) {
    return res.status(400).json({ message: 'Veuillez fournir tous les champs nécessaires.' });
  }

  // Effectuer ici les opérations nécessaires pour enregistrer l'utilisateur dans la base de données
  // Par exemple, vous pouvez utiliser une bibliothèque comme bcrypt pour hacher le mot de passe avant de le stocker

  // Une fois l'opération d'enregistrement terminée, vous pouvez renvoyer une réponse appropriée
  return res.status(200).json({ message: 'Inscription réussie !' });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est en écoute sur le port 3000.');
});
