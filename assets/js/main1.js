const getHotels = async () => {
    const response = await fetch("http://localhost:3000/hotel");
    const hotels = await response.json();
    return hotels;
};

const getVols = async () => {
    const response = await fetch("http://localhost:3000/vol");
    const vols = await response.json();
    return vols;
};

const getCroisieres = async () => {
    const response = await fetch("http://localhost:3000/croisiere");
    const croisieres = await response.json();
    return croisieres;
};

const demandeSuppressionHotel = async (id) => {
    const url = `http://localhost:3000/hotel/suppression/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Hôtel avec l'ID ${id} supprimé avec succès.`);
            VerifieSuppression();
        } else {
            console.error(`Erreur lors de la suppression de l'hôtel avec l'ID ${id}.`);
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression de l\'hôtel :', error);
    }
};

const demandemodificationHotel = async (hotelData) => {
    const url = 'http://localhost:3000/hotel/modification';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(hotelData)
        });

        if (response.ok) {
            const newHotel = await response.json();
            console.log('Nouvel hôtel créé avec succès :', newHotel);
            VerifieModification();
        } else {
            console.error('Erreur lors de la création de l\'hôtel.');
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la création de l\'hôtel :', error);
    }
};

const creerEnteteHotel = () => {
    document.querySelector("#entete").textContent = "";

    // Creation des elements
    var th1 = document.createElement("th")
    var th2 = document.createElement("th")
    var th3 = document.createElement("th")
    var th4 = document.createElement("th")
    var th5 = document.createElement("th")
    var th6 = document.createElement("th")

    // Ajout des valeurs
    th1.textContent = "Photo"
    th2.textContent = "Nom"
    th3.textContent = "Localisation"
    th4.textContent = "Nuitée"
    th5.textContent = "Note"
    th6.textContent = " Actions"
    document.querySelector("#entete").appendChild(th1);
    document.querySelector("#entete").appendChild(th2);
    document.querySelector("#entete").appendChild(th3);
    document.querySelector("#entete").appendChild(th4);
    document.querySelector("#entete").appendChild(th5);
    document.querySelector("#entete").appendChild(th6);


};

const creerEnteteVol = () => {
    document.querySelector("#entete").textContent = "";

    // Creation des elements
    var th1 = document.createElement("th")
    var th2 = document.createElement("th")
    var th3 = document.createElement("th")
    var th4 = document.createElement("th")
    var th5 = document.createElement("th")
    var th6 = document.createElement("th")

    // Ajout des valeurs
    th1.textContent = "Compagnie"
    th2.textContent = "A. Départ"
    th3.textContent = "A. Arrivee"
    th4.textContent = "Durée"
    th5.textContent = "Escale"
    th6.textContent = " Actions"
    document.querySelector("#entete").appendChild(th1);
    document.querySelector("#entete").appendChild(th2);
    document.querySelector("#entete").appendChild(th3);
    document.querySelector("#entete").appendChild(th4);
    document.querySelector("#entete").appendChild(th5);
    document.querySelector("#entete").appendChild(th6);


};

const creerLigneVol = (vols) => {
    document.querySelector("#tbody").textContent = "";
    vols.map(vol => {
        // Creation des elements
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var td6 = document.createElement("td")
        var ta0 = document.createElement("textarea")
        var ta1 = document.createElement("textarea")
        var ta2 = document.createElement("textarea")
        var ta3 = document.createElement("textarea")
        var ta4 = document.createElement("textarea")
        var img = document.createElement("img")
        var label1 = document.createElement("label")
        var label2 = document.createElement("label")
        var i1 = document.createElement("i")
        var i2 = document.createElement("i")

        // Ajout des classes
        tr.classList.add("line")
        ta0.classList.add("textarea")
        ta1.classList.add("textarea")
        ta2.classList.add("textarea")
        ta3.classList.add("textarea")
        ta4.classList.add("textarea")
        ta1.classList.add("textarea")
        ta0.disabled = true
        ta1.disabled = true
        ta2.disabled = true
        ta3.disabled = true
        ta4.disabled = true
        label1.classList.add('badge-success', 'rounded', 'modification')
        label2.classList.add('badge-danger', 'rounded', 'suppression')
        i1.classList.add("mdi", "mdi-auto-fix")
        i2.classList.add("mdi", "mdi", "mdi-delete")
        // Ajout des valeurs
        ta0.textContent = vol.compagnie
        ta1.textContent = vol.aeroport_depart
        ta2.textContent = vol.aeroport_arrivee
        ta3.textContent = vol.duree_vol
        ta4.textContent = vol.escale
        img.src = vol.image
        label1.appendChild(i1);
        label2.appendChild(i2);
        td1.appendChild(img);
        td1.appendChild(ta0);
        td2.appendChild(ta1);
        td3.appendChild(ta2);
        td4.appendChild(ta3);
        td5.appendChild(ta4);
        td6.appendChild(label1);
        td6.appendChild(label2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        //Ajout des evenements
        tr.addEventListener("dblclick", () => {
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = false;
            });

        })
        tr.addEventListener("mouseleave", () => {
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = true;
            });

        })

        tr.querySelector('.modification').addEventListener("click", () => {
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = false;
            });
        })

        tr.querySelector('.suppression').addEventListener("click", () => {
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = false;
            });
        })

        document.querySelector("#tbody").appendChild(tr);
    })


};

const creerLigneHotel = (hotels) => {
    var selectionner;
    var encours;

    hotels.map(hotel => {

        // Creation des elements
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var td6 = document.createElement("td")
        var ta1 = document.createElement("textarea")
        var ta2 = document.createElement("textarea")
        var ta3 = document.createElement("textarea")
        var ta4 = document.createElement("textarea")
        var img = document.createElement("img")
        var label1 = document.createElement("label")
        var label2 = document.createElement("label")
        var i1 = document.createElement("i")
        var i2 = document.createElement("i")

        // Ajout des classes
        tr.classList.add("line")
        ta1.classList.add("textarea")
        ta2.classList.add("textarea")
        ta3.classList.add("textarea")
        ta4.classList.add("textarea")
        ta1.disabled = true
        ta2.disabled = true
        ta3.disabled = true
        ta4.disabled = true
        ta1.classList.add("nom")
        ta2.classList.add("localisation")
        ta3.classList.add("prix")
        ta4.classList.add("note")
        img.classList.add("photo")
        label1.classList.add('badge-success', 'rounded', 'modification')
        label2.classList.add('badge-danger', 'rounded', 'suppression')
        i1.classList.add("mdi", "mdi-auto-fix")
        i2.classList.add("mdi", "mdi", "mdi-delete")
        // Ajout des valeurs
        ta1.textContent = hotel?.nom
        ta2.textContent = hotel?.localisation
        ta3.textContent = hotel?.prix
        ta4.textContent = hotel?.note
        img.src = hotel.photo
        label1.id = hotel.id
        label2.id = hotel.id
        tr.id = hotel.id
        label1.appendChild(i1);
        label2.appendChild(i2);
        td1.appendChild(img);
        td2.appendChild(ta1);
        td3.appendChild(ta2);
        td4.appendChild(ta3);
        td5.appendChild(ta4);
        td6.appendChild(label1);
        td6.appendChild(label2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        //Ajout des evenements
        tr.addEventListener("dblclick", () => {
            
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = false;
                var id = tr.querySelector('.suppression').id
                var nom = tr.querySelector('.nom').textContent
                var localisation = tr.querySelector('.localisation').textContent
                var prix = tr.querySelector('.prix').textContent
                var note = tr.querySelector('.note').textContent
                selectionner= {
                    "id" : id, 
                    "nom": nom,
                    "localisation": localisation, 
                    "prix" : prix, 
                    "note" : note
                }
                
            });
            console.log(selectionner.id)
        })

        tr.addEventListener("mouseleave", () => {
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = true;
            });
            var id = tr.querySelector('.suppression')?.id
            var nom = tr.querySelector('.nom').value
            var localisation = tr.querySelector('.localisation').value
            var prix = tr.querySelector('.prix').value
            var note = tr.querySelector('.note').value
            var photo = tr.querySelector('.photo').src
        
            if(selectionner?.id==id){
                if(nom!=selectionner.nom || localisation !=selectionner.localisation || prix != selectionner.prix || note!=selectionner.note){
                    console.log('il y a eu mofifications !!')
                    const hotelData = {
                        "id_hotel": parseInt(id),
                        "nom": nom,
                        "localisation": localisation,
                        "prix": parseInt(prix),
                        "note": note,
                        "photo":photo
                      };
                    demandemodificationHotel(hotelData);

                }
                else{
                    console.log('Aucune mofifications !!')
                    console.log(id,nom,localisation,prix,note)
                }
            }
        })

        tr.querySelector('.modification').addEventListener("click", () => {

            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function (element) {
                element.disabled = false;
                var id = tr.querySelector('.suppression').id
                var nom = tr.querySelector('.nom').textContent
                var localisation = tr.querySelector('.localisation').textContent
                var prix = tr.querySelector('.prix').textContent
                var note = tr.querySelector('.note').textContent
                selectionner= {
                    "id" : id, 
                    "nom": nom,
                    "localisation": localisation, 
                    "prix" : prix, 
                    "note" : note,
                   
                }
            });

        })

        tr.querySelector('.suppression').addEventListener("click", () => {
            var id = tr.querySelector('.suppression').id
            demandeSuppressionHotel(id)
        })
        document.querySelector("#tbody")?.appendChild(tr);
    })
    VerifieSuppression();
    VerifieModification();
};



getHotels().then(hotels => {
    creerLigneHotel(hotels)
});


document.querySelectorAll('.line')?.forEach(ligne => {

    ligne.addEventListener("dblclick", () => {
        var childElements = ligne.querySelectorAll('.textarea');
        childElements.forEach(function (element) {
            element.disabled = false;
        });

    })

    ligne.addEventListener("mouseleave", () => {
        var childElements = ligne.querySelectorAll('.textarea');
        childElements.forEach(function (element) {
            element.disabled = true;
        });

    })

    ligne.querySelector('.modification').addEventListener("click", () => {
        var childElements = ligne.querySelectorAll('.textarea');
        childElements.forEach(function (element) {
            element.disabled = false;
        });

    })
}

)

document.getElementById('vol_tab')?.addEventListener("click", () => {
    creerEnteteVol();
    document.querySelector("#tbody").textContent = "";
    getVols().then(vols => {
        creerLigneVol(vols);
    });
})
document.getElementById('hotel_tab')?.addEventListener("click", () => {
    creerEnteteHotel();
    document.querySelector("#tbody").textContent = "";
    getHotels().then(hotels => {

        creerLigneHotel(hotels);
    });
})
// document.getElementById('croisiere_tab')?.addEventListener("click",()=>{
//     document.querySelector("#content").textContent="";
//     getCroisieres().then(Croisieres => {
//         creerCarteCroisiere(Croisieres)
//     });
// })



const getSuppression = async () => {
    const response = await fetch("http://localhost:3000/hotel/suppression");
    const suppressions = await response.json();
    const idsSuppression = suppressions.map(element => element.id_element);
    return idsSuppression;
};

const getModification = async () => {
    const response = await fetch("http://localhost:3000/hotel/modification");
    const suppressions = await response.json();
    const idsSuppression = suppressions.map(element => element.id_hotel);
    return idsSuppression;
};

const VerifieSuppression = () => {
    getSuppression().then(element => {
        for (const id of element) {
            document.querySelector('.line[id="' + id + '"]').classList.add("supprime")
        }
    })
};
    
document.querySelector("#tbody").textContent = "";
const VerifieModification = () => {
    getModification().then(element => {
        for (const id of element) {
            document.querySelector('.line[id="'+ id +'"]')?.classList.add("modifie")
        }
    })
};
getHotels().then(hotels => {
    document.querySelector("#tbody").textContent = "";
    creerLigneHotel(hotels);
    VerifieSuppression();
    VerifieModification();
});




