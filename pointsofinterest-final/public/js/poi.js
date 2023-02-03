
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
        .then(function(poiResult) {

            const messageBox = document.getElementById('message-box');
            if(poiResult.status == 'success'){

                messageBox.classList.add('success');
                messageBox.classList.remove('error');
                messageBox.innerHTML = `<strong>${poiResult.status}: ${poiResult.message}`;
            }else{
                if(poiResult.status == 'error'){
                    messageBox.classList.add('error');
                    messageBox.classList.remove('success');
                    messageBox.innerHTML = `<strong>${poiResult.status}:</strong> ${poiResult.message}`;
                }
            }

        })
        .catch(function(error) {
            const messageBox = document.getElementById('message-box');
            messageBox.classList.add('error');
            messageBox.classList.remove('success');
            messageBox.innerHTML = `<strong>${poiResult.status}:</strong> ${poiResult.message}`;
        });

}


const addRecommendation = async (poiId) => {

    // Send a request to our remote URL
    const response = await fetch(`http://localhost:3000/recommendation/add/${poiId}`);

    // Parse the JSON.
    const recommendationResult = await response.json();

    const messageBox = document.getElementById('message-box');
    if(recommendationResult.status == 'success'){

        const recommendationsField  = document.getElementById(`recommendations_${poiId}`);
        recommendationsField.innerHTML = recommendationResult.recommendations;

        messageBox.classList.add('success');
        messageBox.classList.remove('error');
        messageBox.innerHTML = `<strong>${recommendationResult.status}: ${recommendationResult.message}`;
    }else{
        if(recommendationResult.status == 'error'){
            messageBox.classList.add('error');
            messageBox.classList.remove('success');
            messageBox.innerHTML = `<strong>${recommendationResult.status}:</strong> ${recommendationResult.message}`;
        }
    }
    return recommendationResult;
}

const renderPoiGrid = (poiData) => {

    const messageBox = document.getElementById('message-box');
    messageBox.classList.remove('error');
    messageBox.classList.remove('success');
    messageBox.innerHTML = '';

    if (poiData){

        let poiGrid = document.querySelector('.poi-grid')
        poiGrid.innerHTML = "";

        //loop through the poi JSON data
        poiData.forEach(function (poi) {

            let newcontent = document.createElement('div');

            newcontent.classList.add('poi__card');
            newcontent.classList.add('poi');
            newcontent.innerHTML = `
                        <div class="poi-box">
                            <table>
                                <tr><th>Name</td><td>${poi.name}</td></tr>
                                <tr><th>Type</td><td>${poi.type}</td></tr>
                                <tr><th>Country</td><td>${poi.country}</td></tr>
                                <tr><th>Region</td><td>${poi.region}</td></tr>
                                <tr><th>Description</td><td>${poi.description}</td></tr>
                                <tr><th>Lon</td><td>${poi.lon}</td></tr>
                                <tr><th>Lat</td><td>${poi.lat}</td></tr>
                                <tr><th>Recommendations</td><td id="recommendations_${poi.ID}">${poi.recommendations}</td></tr>
                            </table>   
                                
                            <input type="button" class="recommendation_button" id=poi_${poi.ID} value="Recommend" />                                                            
                            
                        </div>
                    `//end



            poiGrid.appendChild(newcontent)
        })

        //add function to add recomendations
        document.querySelectorAll('.recommendation_button').forEach((btn) =>{
            btn.addEventListener('click', (e) =>{

                poiId = e.target.id.replace('poi_', '')
                addRecommendation(poiId)
            })

        })

    }

}



if(document.getElementById('search-by-region')){

    document.getElementById('search-by-region').addEventListener('change', async (e) => {

        const selected_region = document.getElementById('search-by-region').value;
        poiData = await getPOIByRegion(selected_region)

        renderPoiGrid(poiData)
    })
}

if(document.getElementById('add-poi')){

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

}

