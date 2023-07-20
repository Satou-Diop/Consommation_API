var error;


const login = async (user) => {
    const url = 'http://localhost:3000/auth';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const token = await response.json();
            localStorage.setItem('accessToken', JSON.stringify(token));
            console.log("login success")
            return true;
            
        } 
        else {
            error = await response.json();
            console.log(error.message) ;    
            return false;       
        }
    } catch (error) {
        error = {
            message : 'Utilisateur inexistant'
        };
        console.log(error.message) ;
        return false; 
    }
};

const getInfoUser = async (token) => {
    const url = `http://localhost:3000/auth/token`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: token
        });

        const info = await response.json();
        return info ;
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la recuperation :', error);
    }
};


  var loginForm = document.getElementById('loginForm');
  loginForm?.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire (rechargement de la page)
    user={
      "email" : document.getElementById('email').value,
      "mot_de_passe" : document.getElementById('mot_de_passe').value
    }
    login(user).then(response=>{
        console.log(response)
         if(response){
            const token=localStorage.getItem('accessToken')
            getInfoUser(token).then(info=>{
                console.log(info)
                if(info.isadmin==true){
                    window.location.href = 'admin.html';
                }
                else{
                    window.location.href = 'editeur.html';
                }
            })
            
        }
        else {
            document.getElementById('error-message').textContent = error.message
               
        }
    })
    
   

    
  
    
  
  });
  