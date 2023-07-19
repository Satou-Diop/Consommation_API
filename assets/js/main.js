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
        carte.classList.add('card', 'mb-3', 'border', 'shadow-sm', 'bg-body-tertiary', 'rounded')
        carte.style.width = "100%;"
        carte_content.classList.add('row', 'g-0')
        carte_content_img.classList.add('col-sm-4')
        carte_content_img.style.objectFit = "fill"
        carte_content_info.classList.add('col-sm-8', 'p-0')
        carte_content_info_div.classList.add('card-body', 'p-2', 'd-flex', 'flex-column', 'justify-content-between')
        carte_content_info_div.style.height = "100%"
        carte_content_info_dp1.classList.add('card-text', 'mb-1')
        carte_content_info_dp2.classList.add('card-text', 'mb-1')
        carte_content_info_dh.classList.add('card-title', 'mb-0')
        carte_content_info_div_p.classList.add('row')
        carte_content_info_div_p1.classList.add('col-sm-6')
        carte_content_info_dp3.classList.add('card-text', 'mb-1')
        carte_content_info_dp4.classList.add('card-text', 'mb-0')
        carte_content_info_dh2.classList.add('card-title', 'mb-0')
        carte_content_info_div_p2.classList.add('col-sm-6', 'd-flex', 'justify-content-end', 'p-3')
        image.classList.add('img-fluid', 'rounded-start')
        image.style.objectFit = "fill"
        bouton.classList.add('btn', 'btn-social-icon', 'btn-linkedin')
        bouton.type = "button"


        // Ajout des valeurs
        carte_content_info_dp1.textContent = "Hotel"
        carte_content_info_dp2.textContent = hotel?.localisation
        carte_content_info_dh.textContent = hotel?.nom

        carte_content_info_dp3.textContent = "A partir de"
        carte_content_info_dp4.textContent = "Par Nuit"
        carte_content_info_dh2.textContent = hotel?.prix

        image.src = hotel?.photo
        bouton.textContent = hotel?.note


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
    document.querySelector("#content").textContent = "";
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
        carte.classList.add('card', 'mb-3', 'border', 'shadow-sm', 'bg-body-tertiary', 'rounded')
        carte.style.width = "100%;"
        carte_content.classList.add('row', 'g-0')
        carte_content_img.classList.add('col-sm-4')
        carte_content_img.style.objectFit = "fill"
        carte_content_info.classList.add('col-sm-8', 'p-0')
        carte_content_info_div.classList.add('card-body', 'p-2', 'd-flex', 'flex-column', 'justify-content-between')
        carte_content_info_div.style.height = "100%"
        carte_content_info_dp1.classList.add('card-text', 'mb-1')
        carte_content_info_dh.classList.add('card-title', 'mb-0')
        carte_content_info_div_aa.classList.add('row')
        carte_content_info_div_a1.classList.add('col-sm-5')
        carte_content_info_div_a2.classList.add('col-sm-1', 'col-md-1', 'col-lg-1')
        carte_content_info_div_a3.classList.add('col-sm-6', 'text-center')
        carte_content_info_dh2.classList.add('text-dark', 'text-center')
        carte_content_info_dh3.classList.add('text-dark')
        carte_content_info_di.classList.add('mdi', 'mdi-arrow-right')
        carte_content_info_div_d1.classList.add('d-flex')
        carte_content_info_div_d2.classList.add('d-flex')
        carte_content_info_dp2.classList.add('card-text', 'mb-0')
        carte_content_info_dp3.classList.add('text-dark', 'ml-2', 'font-weight-bold')
        carte_content_info_dp4.classList.add('card-text', 'mb-0')
        carte_content_info_dp5.classList.add('text-dark', 'ml-2', 'font-weight-bold')
        image.classList.add('img-fluid', 'rounded-start')

        // Ajout des valeurs
        carte_content_info_dp1.textContent = "Compagnie"
        carte_content_info_dh.textContent = vol.compagnie
        carte_content_info_dh2.textContent = vol.aeroport_depart
        carte_content_info_dh3.textContent = vol.aeroport_arrivee

        carte_content_info_dp2.textContent = "Durée :"
        carte_content_info_dp3.textContent = vol.duree_vol
        carte_content_info_dp4.textContent = "Escale :"
        carte_content_info_dp5.textContent = vol.escale


        image.src = vol.image


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
    document.querySelector("#content").textContent = "";
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
        carte.classList.add('card', 'mb-3', 'border', 'shadow-sm', 'bg-body-tertiary', 'rounded')
        carte.style.width = "100%;"
        carte_content.classList.add('row', 'g-0')
        carte_content_info.classList.add('col-sm-8', 'p-2')
        carte_content_info_div.classList.add('card-body', 'p-2', 'd-flex', 'flex-column', 'justify-content-between')
        carte_content_info_div.style.height = "100%"
        carte_content_info_dp1.classList.add('card-text', 'mb-1')
        carte_content_info_dh.classList.add('card-title', 'mb-0')
        carte_content_info_div_d1.classList.add('d-flex')
        carte_content_info_div_d2.classList.add('d-flex')
        carte_content_info_dp2.classList.add('card-text', 'mb-0')
        carte_content_info_dp3.classList.add('text-dark', 'ml-2', 'font-weight-bold')
        carte_content_info_dp4.classList.add('card-text', 'mb-0')
        carte_content_info_dp5.classList.add('text-dark', 'ml-2', 'font-weight-bold')


        // Ajout des valeurs
        carte_content_info_dp1.textContent = "Bateau"
        carte_content_info_dh.textContent = croisiere.title
        carte_content_info_dp2.textContent = "Durée :"
        carte_content_info_dp3.textContent = croisiere.dure
        carte_content_info_dp4.textContent = "Escale :"
        carte_content_info_dp5.textContent = croisiere.port


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


document.getElementById('vol')?.addEventListener("click", () => {
    document.querySelector("#content").textContent = "";
    getVols().then(Vols => {
        creerCarteVol(Vols)
    });
})

document.getElementById('hotel')?.addEventListener("click", () => {
    document.querySelector("#content").textContent = "";
    getHotels().then(hotels => {
        creerCarteHotel(hotels)
    });
})

document.getElementById('croisiere')?.addEventListener("click", () => {
    document.querySelector("#content").textContent = "";
    getCroisieres().then(Croisieres => {
        creerCarteCroisiere(Croisieres)
    });
})

document.querySelector("#content").textContent = "";
    getHotels().then(hotels => {
        creerCarteHotel(hotels)
    });



