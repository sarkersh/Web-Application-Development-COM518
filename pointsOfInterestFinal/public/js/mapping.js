const map = L.map ("map");
const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";
L.tileLayer ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: attrib } ).addTo(map);
const pos = [50.908, -1.4];
map.setView(pos, 10);

var markerGroup = L.layerGroup().addTo(map);

// Circles, polylines and polygons
//const solent = L.circle([50.908, -1.4], { radius: 100 }).addTo(map);
const solent = L.circle([50.9079, -1.4015], {
    radius:1000,
    fillColor: 'blue',
    color: 'red',
    opacity: 0.5
}).addTo(map);


const plotMarker = async (lat, lng, title, content,poiId) => {
    //console.log(poiId)
    const pos = [lat, lng];
    // const marker = L.marker(pos).addTo(map);
    const marker = L.marker(pos).addTo(markerGroup);

    marker.bindPopup(
        `   <h2>${title}</h2>
            <p>${content}</p>           
            
            <div class="poi__card" id="add-review-wrapper-${poiId}">
                <h3 class="title" style="font-size:2em">Add your review</h3>    
                <div class="poi-box">
                        <textarea name="review_text" type="text" required id="review_text-${poiId}" rows="3"></textarea>                        
                        <input value="Submit" type="submit" id="add-review-${poiId}" onclick="addReview(this.id.replace('add-review-', ''))"/> />
                </div>
            </div>
        `
    );
}

const plotMarkers = (poiData) => {

     if (poiData){

         if(markerGroup.getLayers().length > 0){
             markerGroup.getLayers().forEach(layer => {
                 layer.remove()
             })
         }

        new_pos =[]
        poiData.forEach ( poi => {
            plotMarker(poi.lat, poi.lon, poi.name, poi.description, poi.ID)
            new_pos = [poi.lat, poi.lon]
        })

         map.setView(new_pos, 10);
    }else{


    }

}

const addReview = async (poiId) => {

    const review_text_elm = document.getElementById("review_text-" + poiId.trim());
    const review_text = review_text_elm.value

    const reviewData = {
        poi_id: poiId,
        review: review_text
    }
    fetch('http://localhost:3000/review/add', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(reviewData) {
            if(reviewData.status == 'success'){
                alert(`${reviewData.status}: ${reviewData.message}`)
            }else{
                if(reviewData.status == 'error'){
                    alert(`Error: ${reviewData.message}`);
                }
            }

        })
        .catch(function(error) {
            alert(`Error: ${reviewData.message}`);
        });
}


const getPOIByRegion = async (region) => {

    const response = await fetch(`http://localhost:3000/poi/${region}`);

    // Parse the JSON.
    const pois = await response.json();

    return pois;
}

document.getElementById('search-by-region').addEventListener('change', async (e) => {

    const selected_region = document.getElementById('search-by-region').value;
    poiData = await getPOIByRegion(selected_region)

    plotMarkers(poiData)
})

solent.bindPopup(
    //start
    `             
        <div class="poi__card" style="width: 500px;">
            <div class="poi-box">
                <form action="/" method="post">
                    <input name="name" placeholder="enter name" type="text" required>
                    <input name="type" value="" placeholder="enter type" type="text" required>
                    <select name="country">
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Germany">Germany</option>
                        <option value="Pacific State">Pacific State </option>
                        <option value="england">england</option>
                        <option value="Pacifica">Pacifica</option>
                    </select>
                    <input type="text" name="region" placeholder="region" required />
                    <input type="number" name="lon" placeholder="longitude" required />
                    <input type="number" name="lat" placeholder="latitude" required />
                    <input type="text" name="description" placeholder="description" required />                                        
                    <input value="Submit" type="button" id="add-poi2" onclick="addPOI()" />
                </form>
            </div>
        </div>
            
    `,//end
    {
        maxWidth: '500px',
    }

);


const addPOI = async () => {

    const name = document.querySelector("[name='name']").value;
    const type = document.querySelector("[name='type']").value;
    const country = document.querySelector("[name='country']").value;
    const region = document.querySelector("[name='region']").value;
    const lon = document.querySelector("[name='lon']").value;
    const lat = document.querySelector("[name='lat']").value;
    const description = document.querySelector("[name='description']").value;

    const poiData = {
        name,
        type,
        country,
        region,
        lon,
        lat,
        description
    }

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
        .then(function(poiData) {
            if(poiData.status == 'success'){
                alert(`${poiData.status}: ${poiData.message}`)
            }else{
                if(poiData.status == 'error'){
                    alert(`Error: ${poiData.message}`);
                }
            }
        })
        .catch(function(error) {
            alert(`Error: ${poiData.message}`);
        });

}
