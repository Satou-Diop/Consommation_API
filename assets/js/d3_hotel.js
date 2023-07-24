
const getHotel = async () => {
    const response = await fetch("http://localhost:3000/hotel");
    const hotels = await response.json();
    const data = hotels.map(hotel => ({
        localisation: hotel.localisation,
        prix: hotel.prix
    }));

    return data;
};

getHotel().then(data => {
    const margin = { top: 30, right: 30, bottom: 70, left: 70 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Créer une échelle pour la localisation (échelle catégorielle)
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.localisation))
        .range([0, width])
        .paddingInner(0.1)
        .paddingOuter(0.2);

    // Créer une échelle pour les prix (échelle linéaire)
    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.prix)])
        .range([height, 0]);

    // Créer un conteneur SVG
    const svg = d3.select("#chart")
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Créer les barres du diagramme en barres
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => xScale(d.localisation))
        .attr("y", d => yScale(d.prix))
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - yScale(d.prix))
        .attr("fill", "steelblue");

    // Ajouter les axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Rotation des étiquettes de l'axe X
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis)
        .selectAll("text")
        .attr("transform", "rotate(-45)") // Angle de rotation des étiquettes
        .style("text-anchor", "end") // Alignement des étiquettes

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    // Ajouter des titres
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", height + margin.top + 20)
        .style("text-anchor", "middle")
        .text("Localisation");

    svg.append("text")
        .attr("x", -(height / 2))
        .attr("y", -margin.left + 20)
        .style("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text("Prix moyen des hôtels");
})
