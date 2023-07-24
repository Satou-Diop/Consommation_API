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

var nom = document.querySelectorAll('.nom_user')
const token=localStorage?.getItem('accessToken')
getInfoUser(token).then(info=>{
    console.log(nom)
    nom.forEach(item=>{
        item.textContent = info.nom+" "+info.prenom
    })

})