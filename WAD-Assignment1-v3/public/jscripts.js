

const map=L.map("map1");
pos=[43.372971, -80.975091];


function draw_map(map, pos, pois)
{
    const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";
L.tileLayer
        ("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            { attribution: attrib } ).addTo(map);
map.setView(pos, 15);
//const marker=L.marker(pos).addTo(map);
//marker.bindPopup("fjhfhfgjgfhj");
if (pois.length>0)
{
    for(let i=0; i<pois.length; i++)
    {
        let marker =new L.marker([pois[i].lat, pois[i].lon])
        .bindPopup(pois[i].name+"--"+pois[i].description)
        .addTo(map);
    }
}


}
const spots=[];
draw_map(map, pos, spots);


function addSearchButton()
{
    document.getElementById("search_button").addEventListener("click", ()=>{
        const region=document.getElementById("text_search").value;
        //alert("Your region is "+region);
        searchPOI(region);
    });
}

async function searchPOI(region)
{
    const response=await fetch(`/search/${region}`);  //rest API call
    const data = await response.json();
    let avglat=0.0, avglon=0.0;
    data.forEach(element => {
        avglat=avglat+element.lat;
        avglon=avglon+element.lon;
    });
    avglat=avglat/data.length;
    avglon=avglon/data.length;
    pos=[avglat, avglon]
    draw_map(map, pos, data);  //here data are points of interests
}