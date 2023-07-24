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
        console.log('Une erreur s\'est produite lors de la recuperation :', error);
    }
};

function deconnexion() {
    localStorage.removeItem('accessToken'); 
    window.location.href = 'login.html'; 
  }
var nom = document.querySelectorAll('.nom_user')
const token=localStorage?.getItem('accessToken')
getInfoUser(token)?.then(info=>{
   
    nom.forEach(item=>{
        item.textContent = info?.nom+" "+info?.prenom
    })

})

const clean = ()=>{
    const loginButton = document.createElement('button');
      loginButton.innerText = 'Se connecter';
      loginButton.addEventListener('click', function () {
        window.location.href = 'login.html'; // Redirection vers login.html
      });
    document.body.textContent = '';
    document.body.appendChild(loginButton);
}


  function checkAccessToken() {
    
    const accessToken = localStorage.getItem('accessToken');
    
    var info=[];
    if (accessToken) {  
        getInfoUser(accessToken).then(info=>{
            if(!info){
                clean()
            }
            
        }).catch(error=>{clean()})
      
    }else{
        clean()
    }
  }

window.addEventListener('load',()=>{
    checkAccessToken()
});

