
const getPOIByRegion = async (region) => {

    // Send a request to our remote URL
    const response = await fetch(`http://localhost:3000/poi/${region}`);

    // Parse the JSON.
    const pois = await response.json();

    return pois;
}

const addPOI = async (poiData) => {

    fetch('http://localhost:3000/poi/', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(poiData)
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });

}


const addRecommendation = async (poiId) => {

    // Send a request to our remote URL
    const response = await fetch(`http://localhost:3000/recommendation/add/${poiId}`);

    // Parse the JSON.
    const pois = await response.json();

    return pois;
}

const addRecommendationPost = async (recommendationData) => {

    fetch('http://localhost:3000/recommendation/add/', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(recommendationData)
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Request succeeded with JSON response', data);
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });

}


const clearTable = (table) => {
    //let table = document.getElementById('table');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

}

const renderPOITable = (poiData) => {

    const poiTable = document.getElementById("poi-table")
    clearTable(poiTable);

    if (poiData){

        let html = "";
        poiData.forEach ( poi => {

            var row = poiTable.insertRow()
            var cell1 = row.insertCell(0).innerHTML = poi.name
            var cell2 = row.insertCell(1).innerHTML = poi.type
            var cell3 = row.insertCell(2).innerHTML = poi.country
            var cell4 = row.insertCell(3).innerHTML = poi.region
            var cell5 = row.insertCell(4).innerHTML = poi.description
            var cell6 = row.insertCell(5).innerHTML = poi.lon
            var cell7 = row.insertCell(6).innerHTML = poi.lat
            var cell8 = row.insertCell(7).innerHTML = poi.recommendations
            var cell9 = row.insertCell(8).innerHTML = `<button class="recommendation_button" id=poi_${poi.ID}>Recommend</button>`

        })


        //add function to add recomendations
        document.querySelectorAll('.recommendation_button').forEach((btn) =>{
            btn.addEventListener('click', (e) =>{

                poiId = e.target.id.replace('poi_', '')
                addRecommendation(poiId)

            })

        })

    }else{


    }

}


if(document.getElementById('search-by-region')){
    document.getElementById('search-by-region').addEventListener('change', async (e) => {

        const selected_region = document.getElementById('search-by-region').value;
        poiData = await getPOIByRegion(selected_region)
        renderPOITable(poiData)
    })
}


document.getElementById('add-poi').addEventListener('click', async (e) => {

     e.preventDefault();

    const name = document.querySelector("[name='name']").value;
    const type = document.querySelector("[name='type']").value;
    const country = document.querySelector("[name='country']").value;
    const region = document.querySelector("[name='region']").value;
    const lon = document.querySelector("[name='lon']").value;
    const lat = document.querySelector("[name='lat']").value;
    const description = document.querySelector("[name='description']").value;

    addPOI({
        name,
        type,
        country,
        region,
        lon,
        lat,
        description
    })
})


