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


const creerCarteHotel = (hotels) => {
    hotels.map(hotel => {
        // Creation des elements
        var carte = document.createElement("div")
        var carte_content = document.createElement("div")
        var carte_content_img = document.createElement("div")
        var carte_content_info = document.createElement("div")
        var carte_content_info_div = document.createElement("div")
        var carte_content_info_div_t = document.createElement("div")
        var carte_content_info_dp1 = document.createElement("p")
        var carte_content_info_dp2 = document.createElement("p")
        var carte_content_info_dh = document.createElement("h6")
        var carte_content_info_div_p = document.createElement("div")
        var carte_content_info_div_p1 = document.createElement("div")
        var carte_content_info_dp3 = document.createElement("p")
        var carte_content_info_dp4 = document.createElement("p")
        var carte_content_info_dh2 = document.createElement("h6")
        var carte_content_info_div_p2 = document.createElement("div")
        var image = document.createElement("img")
        var bouton = document.createElement("button")

        // Ajout des classes css
        carte.classList.add('card','mb-3','border','shadow-sm','bg-body-tertiary','rounded')
        carte.style.width="100%;"
        carte_content.classList.add('row','g-0')
        carte_content_img.classList.add('col-sm-4')
        carte_content_img.style.objectFit="fill"
        carte_content_info.classList.add('col-sm-8','p-0')
        carte_content_info_div.classList.add('card-body','p-2','d-flex','flex-column','justify-content-between')
        carte_content_info_div.style.height="100%"
        carte_content_info_dp1.classList.add('card-text','mb-1')
        carte_content_info_dp2.classList.add('card-text','mb-1')
        carte_content_info_dh.classList.add('card-title','mb-0')
        carte_content_info_div_p.classList.add('row')
        carte_content_info_div_p1.classList.add('col-sm-6')
        carte_content_info_dp3.classList.add('card-text','mb-1')
        carte_content_info_dp4.classList.add('card-text','mb-0')
        carte_content_info_dh2.classList.add('card-title','mb-0')
        carte_content_info_div_p2.classList.add('col-sm-6','d-flex','justify-content-end','p-3')
        image.classList.add('img-fluid','rounded-start')
        image.style.objectFit="fill"
        bouton.classList.add('btn','btn-social-icon','btn-linkedin')
        bouton.type="button"

        
        // Ajout des valeurs
        carte_content_info_dp1.textContent= "Hotel"
        carte_content_info_dp2.textContent= hotel?.localisation
        carte_content_info_dh.textContent=hotel?.nom
        
        carte_content_info_dp3.textContent= "A partir de"
        carte_content_info_dp4.textContent= "Par Nuit"
        carte_content_info_dh2.textContent=hotel?.prix

        image.src=hotel?.photo
        bouton.textContent=hotel?.note
    
        
        carte_content_img.appendChild(image)
        carte_content_info_div_t.appendChild(carte_content_info_dp1)
        carte_content_info_div_t.appendChild(carte_content_info_dh)
        carte_content_info_div_t.appendChild(carte_content_info_dp2)
        carte_content_info_div_p1.appendChild(carte_content_info_dp3)
        carte_content_info_div_p1.appendChild(carte_content_info_dh2)
        carte_content_info_div_p1.appendChild(carte_content_info_dp4)
        carte_content_info_div_p2.appendChild(bouton)
        carte_content_info_div_p.appendChild(carte_content_info_div_p1)
        carte_content_info_div_p.appendChild(carte_content_info_div_p2)
        carte_content_info_div.appendChild(carte_content_info_div_t)
        carte_content_info_div.appendChild(carte_content_info_div_p)
        carte_content_info.appendChild(carte_content_info_div)
        carte_content.appendChild(carte_content_img)
        carte_content.appendChild(carte_content_info)
        carte.appendChild(carte_content)

        // p.addEventListener('change', () => {
        //     modifier_overview(film,p)

        // });
        // h3.addEventListener('change', () => {
        //     modifier_titre(film,h3)

        // });
        // image.addEventListener('click', () => {
        //     bouton.click()

        // });
        // bouton.addEventListener('change', () => {
        //     modifier_image(film,bouton.value.toString().split('\\')[2])

        // });
        // desc.appendChild(h3)
        // desc.appendChild(p)
        // desc.appendChild(bouton)
        // carte.appendChild(desc)
        // carte.addEventListener('mouseover', () => {
        //     setOverview(carte)

        // });
        // carte.addEventListener('mouseout', () => {
        //     delOverview(carte)

        // });
        document.querySelector("#content")?.appendChild(carte);
    })


};

// creerCarteHotel();
const creerCarteVol = (vols) => {
    document.querySelector("#content").textContent="";
    vols.map(vol => {
    // Creation des elements
    var carte = document.createElement("div")
    var carte_content = document.createElement("div")
    var carte_content_img = document.createElement("div")
    var carte_content_info = document.createElement("div")
    var carte_content_info_div = document.createElement("div")
    var carte_content_info_div_t = document.createElement("div")
    var carte_content_info_dp1 = document.createElement("p")
    var carte_content_info_dh = document.createElement("h6")
    var carte_content_info_div_a = document.createElement("div")
    var carte_content_info_div_aa = document.createElement("div")
    var carte_content_info_div_a1 = document.createElement("div")
    var carte_content_info_div_a2 = document.createElement("div")
    var carte_content_info_div_a3 = document.createElement("div")
    var carte_content_info_di = document.createElement("i")
    var carte_content_info_dh2 = document.createElement("h3")
    var carte_content_info_dh3 = document.createElement("h3")
    var carte_content_info_div_d = document.createElement("div")
    var carte_content_info_div_d1 = document.createElement("div")
    var carte_content_info_div_d2 = document.createElement("div")
    var carte_content_info_dp2 = document.createElement("p")
    var carte_content_info_dp3 = document.createElement("p")
    var carte_content_info_dp4 = document.createElement("p")
    var carte_content_info_dp5 = document.createElement("p")
    var image = document.createElement("img")

    // Ajout des classes css
    carte.classList.add('card','mb-3','border','shadow-sm','bg-body-tertiary','rounded')
    carte.style.width="100%;"
    carte_content.classList.add('row','g-0')
    carte_content_img.classList.add('col-sm-4')
    carte_content_img.style.objectFit="fill"
    carte_content_info.classList.add('col-sm-8','p-0')
    carte_content_info_div.classList.add('card-body','p-2','d-flex','flex-column','justify-content-between')
    carte_content_info_div.style.height="100%"
    carte_content_info_dp1.classList.add('card-text','mb-1')
    carte_content_info_dh.classList.add('card-title','mb-0')
    carte_content_info_div_aa.classList.add('row')
    carte_content_info_div_a1.classList.add('col-sm-5')
    carte_content_info_div_a2.classList.add('col-sm-1','col-md-1','col-lg-1')
    carte_content_info_div_a3.classList.add('col-sm-6','text-center')
    carte_content_info_dh2.classList.add('text-dark','text-center')
    carte_content_info_dh3.classList.add('text-dark')
    carte_content_info_di.classList.add('mdi','mdi-arrow-right')
    carte_content_info_div_d1.classList.add('d-flex')
    carte_content_info_div_d2.classList.add('d-flex')
    carte_content_info_dp2.classList.add('card-text','mb-0')
    carte_content_info_dp3.classList.add('text-dark','ml-2','font-weight-bold')
    carte_content_info_dp4.classList.add('card-text','mb-0')
    carte_content_info_dp5.classList.add('text-dark','ml-2','font-weight-bold')
    image.classList.add('img-fluid','rounded-start')
    
    // Ajout des valeurs
    carte_content_info_dp1.textContent= "Compagnie"
    carte_content_info_dh.textContent=vol.compagnie
    carte_content_info_dh2.textContent=vol.aeroport_depart
    carte_content_info_dh3.textContent=vol.aeroport_arrivee
    
    carte_content_info_dp2.textContent= "Durée :"
    carte_content_info_dp3.textContent= vol.duree_vol
    carte_content_info_dp4.textContent= "Escale :"
    carte_content_info_dp5.textContent= vol.escale
  

    image.src=vol.image
   
    
    carte_content_img.appendChild(image)
    carte_content_info_div_t.appendChild(carte_content_info_dp1)
    carte_content_info_div_t.appendChild(carte_content_info_dh)
    carte_content_info_div_a1.appendChild(carte_content_info_dh2)
    carte_content_info_div_a2.appendChild(carte_content_info_di)
    carte_content_info_div_a3.appendChild(carte_content_info_dh3)
    carte_content_info_div_aa.appendChild(carte_content_info_div_a1)
    carte_content_info_div_aa.appendChild(carte_content_info_div_a2)
    carte_content_info_div_aa.appendChild(carte_content_info_div_a3)
    carte_content_info_div_a.appendChild(carte_content_info_div_aa)
    carte_content_info_div_d1.appendChild(carte_content_info_dp2)
    carte_content_info_div_d1.appendChild(carte_content_info_dp3)
    carte_content_info_div_d2.appendChild(carte_content_info_dp4)
    carte_content_info_div_d2.appendChild(carte_content_info_dp5)
    carte_content_info_div_d.appendChild(carte_content_info_div_d1)
    carte_content_info_div_d.appendChild(carte_content_info_div_d2)
    carte_content_info_div.appendChild(carte_content_info_div_t)
    carte_content_info_div.appendChild(carte_content_info_div_a)
    carte_content_info_div.appendChild(carte_content_info_div_d)
    carte_content_info.appendChild(carte_content_info_div)
    carte_content.appendChild(carte_content_img)
    carte_content.appendChild(carte_content_info)
    carte.appendChild(carte_content)

    // p.addEventListener('change', () => {
    //     modifier_overview(film,p)

    // });
    // h3.addEventListener('change', () => {
    //     modifier_titre(film,h3)

    // });
    // image.addEventListener('click', () => {
    //     bouton.click()

    // });
    // bouton.addEventListener('change', () => {
    //     modifier_image(film,bouton.value.toString().split('\\')[2])

    // });
    // desc.appendChild(h3)
    // desc.appendChild(p)
    // desc.appendChild(bouton)
    // carte.appendChild(desc)
    // carte.addEventListener('mouseover', () => {
    //     setOverview(carte)

    // });
    // carte.addEventListener('mouseout', () => {
    //     delOverview(carte)

    // });
    document.querySelector("#content").appendChild(carte);
    })

};

//creerCarteVol();
const creerCarteCroisiere = (croisieres) => {
    document.querySelector("#content").textContent="";
    croisieres.map(croisiere => {
    // Creation des elements
    var carte = document.createElement("div")
    var carte_content = document.createElement("div")
    var carte_content_info = document.createElement("div")
    var carte_content_info_div = document.createElement("div")
    var carte_content_info_div_t = document.createElement("div")
    var carte_content_info_dp1 = document.createElement("p")
    var carte_content_info_dh = document.createElement("h6")
    var carte_content_info_div_d1 = document.createElement("div")
    var carte_content_info_div_d2 = document.createElement("div")
    var carte_content_info_dp2 = document.createElement("p")
    var carte_content_info_dp3 = document.createElement("p")
    var carte_content_info_dp4 = document.createElement("p")
    var carte_content_info_dp5 = document.createElement("p")
    

    // Ajout des classes css
    carte.classList.add('card','mb-3','border','shadow-sm','bg-body-tertiary','rounded')
    carte.style.width="100%;"
    carte_content.classList.add('row','g-0')
    carte_content_info.classList.add('col-sm-8','p-2')
    carte_content_info_div.classList.add('card-body','p-2','d-flex','flex-column','justify-content-between')
    carte_content_info_div.style.height="100%"
    carte_content_info_dp1.classList.add('card-text','mb-1')
    carte_content_info_dh.classList.add('card-title','mb-0')
    carte_content_info_div_d1.classList.add('d-flex')
    carte_content_info_div_d2.classList.add('d-flex')
    carte_content_info_dp2.classList.add('card-text','mb-0')
    carte_content_info_dp3.classList.add('text-dark','ml-2','font-weight-bold')
    carte_content_info_dp4.classList.add('card-text','mb-0')
    carte_content_info_dp5.classList.add('text-dark','ml-2','font-weight-bold')

    
    // Ajout des valeurs
    carte_content_info_dp1.textContent= "Bateau"
    carte_content_info_dh.textContent= croisiere.title
    carte_content_info_dp2.textContent= "Durée :"
    carte_content_info_dp3.textContent= croisiere.dure
    carte_content_info_dp4.textContent= "Escale :"
    carte_content_info_dp5.textContent= croisiere.port
  
   
    carte_content_info_div_t.appendChild(carte_content_info_dp1)
    carte_content_info_div_t.appendChild(carte_content_info_dh)
    carte_content_info_div_d1.appendChild(carte_content_info_dp2)
    carte_content_info_div_d1.appendChild(carte_content_info_dp3)
    carte_content_info_div_d2.appendChild(carte_content_info_dp4)
    carte_content_info_div_d2.appendChild(carte_content_info_dp5)
    carte_content_info_div.appendChild(carte_content_info_div_t)
    carte_content_info_div.appendChild(carte_content_info_div_d1)
    carte_content_info_div.appendChild(carte_content_info_div_d2)
    carte_content_info.appendChild(carte_content_info_div)
    carte_content.appendChild(carte_content_info)
    carte.appendChild(carte_content)

    // p.addEventListener('change', () => {
    //     modifier_overview(film,p)

    // });
    // h3.addEventListener('change', () => {
    //     modifier_titre(film,h3)

    // });
    // image.addEventListener('click', () => {
    //     bouton.click()

    // });
    // bouton.addEventListener('change', () => {
    //     modifier_image(film,bouton.value.toString().split('\\')[2])

    // });
    // desc.appendChild(h3)
    // desc.appendChild(p)
    // desc.appendChild(bouton)
    // carte.appendChild(desc)
    // carte.addEventListener('mouseover', () => {
    //     setOverview(carte)

    // });
    // carte.addEventListener('mouseout', () => {
    //     delOverview(carte)

    // });
    document.querySelector("#content").appendChild(carte);
    })


};
 

document.getElementById('vol')?.addEventListener("click",()=>{
    document.querySelector("#content").textContent="";
    getVols().then(Vols => {
        creerCarteVol(Vols)
    });
})
document.getElementById('hotel')?.addEventListener("click",()=>{
    document.querySelector("#content").textContent="";
    getHotels().then(hotels => {
        creerCarteHotel(hotels)
    });
})
document.getElementById('croisiere')?.addEventListener("click",()=>{
    document.querySelector("#content").textContent="";
    getCroisieres().then(Croisieres => {
        creerCarteCroisiere(Croisieres)
    });
})



const creerEnteteHotel = () => {
    document.querySelector("#entete").textContent="";
   
    // Creation des elements
    var th1 = document.createElement("th")
    var th2 = document.createElement("th")
    var th3 = document.createElement("th")
    var th4 = document.createElement("th")
    var th5 = document.createElement("th")
    var th6 = document.createElement("th")

    // Ajout des valeurs
    th1.textContent="Photo"
    th2.textContent="Nom"
    th3.textContent="Localisation"
    th4.textContent="Nuitée"
    th5.textContent="Note"
    th6.textContent=" Actions"  
    document.querySelector("#entete").appendChild(th1);
    document.querySelector("#entete").appendChild(th2);
    document.querySelector("#entete").appendChild(th3);
    document.querySelector("#entete").appendChild(th4);
    document.querySelector("#entete").appendChild(th5);
    document.querySelector("#entete").appendChild(th6);


};
const creerEnteteVol = () => {
    document.querySelector("#entete").textContent="";
   
    // Creation des elements
    var th1 = document.createElement("th")
    var th2 = document.createElement("th")
    var th3 = document.createElement("th")
    var th4 = document.createElement("th")
    var th5 = document.createElement("th")
    var th6 = document.createElement("th")

    // Ajout des valeurs
    th1.textContent="Compagnie"
    th2.textContent="A. Départ"
    th3.textContent="A. Arrivee"
    th4.textContent="Durée"
    th5.textContent="Escale"
    th6.textContent=" Actions"  
    document.querySelector("#entete").appendChild(th1);
    document.querySelector("#entete").appendChild(th2);
    document.querySelector("#entete").appendChild(th3);
    document.querySelector("#entete").appendChild(th4);
    document.querySelector("#entete").appendChild(th5);
    document.querySelector("#entete").appendChild(th6);


};

const creerLigneVol = (vols) => {
    document.querySelector("#tbody").textContent="";
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
    ta0.disabled=true
    ta1.disabled=true
    ta2.disabled=true
    ta3.disabled=true
    ta4.disabled=true
    label1.classList.add('badge-success','rounded','modification') 
    label2.classList.add('badge-danger','rounded','suppression') 
    i1.classList.add("mdi","mdi-auto-fix") 
    i2.classList.add("mdi","mdi","mdi-delete") 
    // Ajout des valeurs
    ta0.textContent=vol.compagnie
    ta1.textContent=vol.aeroport_depart
    ta2.textContent=vol.aeroport_arrivee
    ta3.textContent=vol.duree_vol
    ta4.textContent=vol.escale
    img.src=vol.image
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
    tr.addEventListener("dblclick",()=>{
        var childElements = tr.querySelectorAll('.textarea');
        childElements.forEach(function(element) {
            element.disabled = false;
        });
        
        })
    tr.addEventListener("mouseleave",()=>{
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function(element) {
                element.disabled = true;
            });
            
            })
    
    tr.querySelector('.modification').addEventListener("click",()=>{
        var childElements = tr.querySelectorAll('.textarea');
        childElements.forEach(function(element) {
            element.disabled = false;
        });
    })

    document.querySelector("#tbody").appendChild(tr);
    })


};

const creerLigneHotel = (hotels) => {
    document.querySelector("#tbody").textContent="";
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
    ta1.disabled=true
    ta2.disabled=true
    ta3.disabled=true
    ta4.disabled=true
    label1.classList.add('badge-success','rounded','modification') 
    label2.classList.add('badge-danger','rounded','suppression') 
    i1.classList.add("mdi","mdi-auto-fix") 
    i2.classList.add("mdi","mdi","mdi-delete") 
    // Ajout des valeurs
    ta1.textContent=hotel.nom
    ta2.textContent=hotel.localisation
    ta3.textContent=hotel.prix
    ta4.textContent=hotel.note
    img.src=hotel.photo
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
     tr.addEventListener("dblclick",()=>{
        var childElements = tr.querySelectorAll('.textarea');
        childElements.forEach(function(element) {
            element.disabled = false;
        });
        
        })
    tr.addEventListener("mouseleave",()=>{
            var childElements = tr.querySelectorAll('.textarea');
            childElements.forEach(function(element) {
                element.disabled = true;
            });
            
            })
    
    tr.querySelector('.modification').addEventListener("click",()=>{
        var childElements = tr.querySelectorAll('.textarea');
        childElements.forEach(function(element) {
            element.disabled = false;
        });
    })
    document.querySelector("#tbody").appendChild(tr);
    })

};



// getHotels().then(hotels => {
//     creerLigneHotel(hotels)
// });

getHotels().then(hotels => {
    document.querySelector("#tbody").textContent="";
    creerLigneHotel(hotels);
 });
document.querySelectorAll('.line')?.forEach(ligne=>{
   
    ligne.addEventListener("dblclick",()=>{
        var childElements = ligne.querySelectorAll('.textarea');
        childElements.forEach(function(element) {
            element.disabled = false;
        });
        
        })

        ligne.addEventListener("mouseleave",()=>{
            var childElements = ligne.querySelectorAll('.textarea');
            childElements.forEach(function(element) {
                element.disabled = true;
            });
            
            })
        
        ligne.querySelector('.modification').addEventListener("click",()=>{
        var childElements = ligne.querySelectorAll('.textarea');
        childElements.forEach(function(element) {
            element.disabled = false;
        });
        
        })
}

)

document.getElementById('vol_tab')?.addEventListener("click",()=>{
    creerEnteteVol();
    document.querySelector("#tbody").textContent="";
    getVols().then(vols => {
        creerLigneVol(vols);
     });
})
document.getElementById('hotel_tab')?.addEventListener("click",()=>{
    creerEnteteHotel();
    document.querySelector("#tbody").textContent="";
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