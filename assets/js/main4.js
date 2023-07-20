
const getSuppression = async () => {
    const response = await fetch("http://localhost:3000/hotel/suppression");
    const suppressions = await response.json();
    return suppressions;
};

const getHotelById = async (id) => {
    const url = `http://localhost:3000/hotel/${id}`;

    try {
        const response = await fetch(url);
        const hotel = await response.json();

        console.log('Hôtel récupéré :', hotel);
        return hotel.hotel[0];
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération de l\'hôtel :', error);
    }
};

const delSuppression = async (id) => {
    const url = `http://localhost:3000/hotel/suppressions/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Hôtel avec l'ID ${id} supprimé avec succès.`);
            return true;
        } else {
            console.error(`Erreur lors de la suppression de l'hôtel avec l'ID ${id}.`);
            return false;
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression de l\'hôtel :', error);
        return false;
    }
};

const SuppressionHotel = async (id) => {
    const url = `http://localhost:3000/hotel/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Hôtel avec l'ID ${id} supprimé avec succès.`);
            return true;
        } else {
            console.error(`Erreur lors de la suppression de l'hôtel avec l'ID ${id}.`);
            return false;
        }
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la suppression de l\'hôtel :', error);
        return false;
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

const creerLigneHotel = (elements) => {
    var selectionner;
    document.querySelector("#tbody").textContent = "";
    elements.map(element => {

        if(element.type=="hotel")
        {
    
        getHotelById(parseInt(element?.id_element)).then(hotel=>{

        // Creation des elements
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var td6 = document.createElement("td")
        var ta1 = document.createElement("p")
        var ta2 = document.createElement("p")
        var ta3 = document.createElement("p")
        var ta4 = document.createElement("p")
        var img = document.createElement("img")
        var label1 = document.createElement("label")
        var label2 = document.createElement("label")


        // Ajout des classes
        tr.classList.add("line")
        ta1.classList.add("nom")
        ta2.classList.add("localisation")
        ta3.classList.add("prix")
        ta4.classList.add("note")
        img.classList.add("photo")
        label1.classList.add('badge-success', 'rounded', 'modification')
        label2.classList.add('badge-danger', 'rounded', 'suppression')
       
        // Ajout des valeurs
        ta1.textContent = hotel.nom
        ta2.textContent = hotel.localisation
        ta3.textContent = hotel.prix
        ta4.textContent = hotel.note
        img.src = hotel.photo
        label1.id = hotel.id
        label2.id = element.id
        tr.id = hotel.id
        label1.textContent = "Accepter";
        label2.textContent = "Refuser";
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

        
        tr.querySelector('.modification').addEventListener("click", () => {

            var id = tr.querySelector('.suppression').id
            var id_hotel = tr.querySelector('.modification').id
            if(delSuppression(id)){
                tr.remove();
            }
           
        })

        tr.querySelector('.suppression').addEventListener("click", () => {
            var id = tr.querySelector('.suppression').id
            var id_hotel = tr.querySelector('.modification').id
            if(SuppressionHotel(id_hotel)) {
                if(delSuppression(id)){
                    tr.remove();
                }
            }
            
        })
        document.querySelector("#tbody").appendChild(tr);
    })
    }

    })
};




document.getElementById('vol_tab')?.addEventListener("click", () => {
    creerEnteteVol();
    getSuppression().then(elements => {
        document.querySelector("#tbody").textContent = "";
        creerLigneHotel(elements);
    });
})

document.getElementById('hotel_tab')?.addEventListener("click", () => {
    creerEnteteHotel();
    document.querySelector("#tbody").textContent = "";
    getHotels().then(hotels => {

        creerLigneHotel(hotels);
    });
})





getSuppression().then(elements => {
    document.querySelector("#tbody").textContent = "";
    creerLigneHotel(elements);
});




