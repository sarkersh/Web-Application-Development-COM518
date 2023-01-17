const baseUrlApi = "http://localhost:8080/api/v1/poi";
const baseUrlLogin = "http://localhost:8080/login";
const baseUrlHome = "http://localhost:8080/";
let auth = false;
let search = "";
let mapEvent, poiRows, position, userlogged;
const map = L.map("map");

// All the selectors to manipulate html using js
const profileUser = document.getElementById("profile-user");
const poiname = document.querySelector(".name");
const type = document.querySelector(".type");
const region = document.querySelector(".region");
const country = document.querySelector(".country");
const description = document.querySelector(".description");
const form = document.getElementById("form-main");

let url = `${baseUrlApi}/getAllPoi?page=1&limit=10`;

const createMap = (map, pos, pois) => {
  const attribute =
    "Map data copyright OpenStreetMap contributors, Open Database Licence";
  // To add tiles on the map
  L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: attribute,
  }).addTo(map);
  // To add map on the html
  map.setView(pos, 3);
  // To add markers on the map by searching and on page load

  if (pois.length > 0) {
    for (let i = 0; i < pois.length; i++) {
      if (userlogged) {
        popupContent = `
        
        `;
      }
      new L.marker([pois[i].lat, pois[i].lon])
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 200,
            minWidth: 50,
            // autoClose: false,
            // closeOnClick: false,
          })
        )
        .setPopupContent(
          "<div>" +
            " <h3> " +
            pois[i].name +
            " </h3>" +
            " <p> " +
            pois[i].description +
            " </p>" +
            " <p> " +
            pois[i].recommendations +
            " Peoples recomended</p>" +
            "</div>"
        )
        .openPopup();
    }
  }
};

const searchResults = async () => {
 
  try {
    const res = await fetch(url, { method: "get" });
    const data = await res.json();
    const { rows, token } = data;
    poiRows = rows;

    if (rows) {
      let avglat = 0.0;
      let avglon = 0.0;
      rows.map((row) => {
        document.getElementById("search-results-wrapper").insertAdjacentHTML(
          "beforeend",
          `
          <div class='search-results'>
            <h1>${row.name}</h1>
            <p>location: ${row.region} ${row.type}, ${row.country}</p>
            <p>Description: ${row.description}</p>
            <p>Recommendations: ${row.recommendations}</p>
          </div>

        `
        );

        const { lat, lon } = row;

        avglat += lat;
        avglon += lon;
      });
      avglat /= rows.length;
      avglon /= rows.length;
      position = [avglat, avglon];
      console.log(position);
      createMap(map, position, rows);
    } else {
      console.log("rows not found");
    }
  } catch (err) {
    console.log(err);
  }
};

if (window.location.href === baseUrlHome) searchResults();

function onHandleSubmit() {
  document.getElementById("search-results-wrapper").innerHTML = "";
  search = document.getElementById("searchTerm").value;
  if (search.length > 0) {
    url += `&search=${search}`;
  }

  searchResults();
  document.getElementById("searchTerm").value = "";
  url = `${baseUrlApi}/getAllPoi?page=1&limit=10`;
  console.log(url, searchTerm);
}

function redirectLogin() {
  window.location.assign("/login");
}

if (window.location.href === baseUrlLogin)
  submit.addEventListener("click", loginSubmit);

// toggle profile menu
function menuToggle() {
  const toggleMenu = document.querySelector(".dropdown-profile");
  toggleMenu.classList.toggle("active");
}

const getCurrentUser = async () => {
  try {
    const response = await fetch(`${baseUrlApi}/`);

    const data = await response.json();
    const { user } = data;
    userlogged = user;
    if (user === undefined) {
      profileUser.insertAdjacentHTML(
        "afterbegin",
        `
           <button onclick="redirectLogin()" class="btn btn-primary btn-round-2">
            Login
          </button>
        
        `
      );
      console.log({ msg: "user is a guest" });
    } else {
      profileUser.insertAdjacentHTML(
        "afterbegin",
        `
         <div class="action">
            <div class="profile" onclick="menuToggle()">
          
              <!-- <img src="./assets/avatar.jpg" /> -->
             
              <span>
                <span>
                  <FaUserCircle class="profile-icon" size="15" />
                </span>
                <span id="profile-name">
                  ${user.charAt(0).toUpperCase()}${user.slice(1)}
                </span>
              </span>
            </div>
            <div class="dropdown-profile">
              <ul>
                <li onclick="logoutUser()">
                  <FaSignOutAlt size="15" />
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        `
      );
    }
  } catch (err) {
    console.log(err);
  }
};


form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const { lat, lng } = mapEvent.latlng;

  // creating new poi object to add in database
  const newPoiObj = {
    name: poiname.value,
    type: type.value,
    country: country.value,
    region: region.value,
    lat: mapEvent.latlng.lat,
    lng: mapEvent.latlng.lng,
    description: description.value,
    recommendations: 0,
  };

  console.log(
    newPoiObj.name,
    newPoiObj.type,
    newPoiObj.country,
    newPoiObj.region,
    newPoiObj.lat,
    newPoiObj.lng,
    newPoiObj.description,
    newPoiObj.recommendations
  );

  // posting data on backend api on /createPoi

  try {
    const newPoiUrl = `${baseUrlApi}/createPoi`;
    const response = await fetch(newPoiUrl, {
      method: "POST",
      body: JSON.stringify(newPoiObj),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        // autoClose: false,
        // closeOnClick: false,
      })
    )
    .setPopupContent(
      "<div>" +
        " <h3> " +
        newPoiObj.name +
        " </h3>" +
        " <p> " +
        newPoiObj.description +
        " </p>" +
        " <p> " +
        newPoiObj.recommendations +
        " Peoples recomended</p>" +
        " <button class='rcbtn' type='button' onclick='recomendPoi()'>Recomend Poi</button>" +
        "</div>"
    )
    .openPopup();

  // clear input fields
  poiname.value =
    type.value =
    country.value =
    region.value =
    description.value =
      "";

  form.classList.add("form-hidden");
});

map.on("click", function (mapE) {
  mapEvent = mapE;
  form.classList.toggle("form-hidden");
});
// Map ends

// else {
//   x.innerHTML = "Geolocation is not supported by this browser.";
// }

const logoutUser = async () => {
  try {
    const response = await fetch(`${baseUrlApi}/logout`);

    const data = await response.json();
    console.log(data);

    window.location.assign("/");
  } catch (err) {
    console.log(err);
  }
};

searchResults();
getCurrentUser();
