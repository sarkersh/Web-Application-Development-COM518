
// Q1 replace the ????? so that this event listener handles click events on
// the 'search for flight' button
document.getElementById('btnFlightSearch').addEventListener('click', () => {

	// Q2 complete these statements to read destination and date from form
	const city = document.getElementById('theDest').value;
	const date = document.getElementById('theDate').value;

	// Q3 complete the fetch API call to send the user's chosen city and
	// date to the 'flight search' route in server.js. You will need to look
	// at the server.js code to complete this successfully.
	fetch(`http://localhost:3000/search/${city}/${date}`).then (
		response => response.json())
	    .then(json => {

		// Q6 complete so that it parses the JSON returned and outputs the
		// data to the searchResults <div> in the format shown on the paper.
			let html = "";
			json.results.forEach(flight => {
				html += `<div style="padding:10px; margin-bottom: 10px">
                Flight Number - ${flight.fnumber} <br> 
                Destination  - ${flight.endcity} <br>
                Date  - ${flight.date} <br>
                Departs  - ${flight.depart} <br>
                Arrives  - ${flight.arrive} <br>
                Price  - ${flight.price}               
            </div>`;
			});
			document.getElementById('searchResults').innerHTML = html;

		// Q8 update with a book button - see question paper
			json.results.forEach(flight => {
				html += `<div style="padding:10px; margin-bottom: 10px">
                Flight Number - ${flight.fnumber} <br> 
                Destination  - ${flight.endcity} <br>
                Date  - ${flight.date} <br>
                Departs  - ${flight.depart} <br>
                Arrives  - ${flight.arrive} <br>
                Price  - ${price.height}  
                Price  - ${flight.price}
                <input id="seats_${flight.fnumber}" />
                <button onclick="bookFlight(${flight.fnumber})">Book</button>
            </div>`;
			});
			document.getElementById('searchResults').innerHTML = html;

	});	

});


const bookFlight = async (flightId) =>{

	const seats = document.getElementById('seats_' + flightId).value;

	// Q9 complete the fetch API call to send the data to the 'add flight'
	// route on the server as a POST request...
	const response = await fetch(`http://localhost:3000/flightbook/${flightId}`, {
		method: 'POST',
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			npass: seats
		})
	})

	if (json.status !== 200) {
		alert(json.errMsg);
	}else{
		alert('your flight is succesfully booked');
	}
}

// Q9 replace the ????? so that this event listener handles click events on
// the 'add flight' button
// Note the event listener has been setup to be an async function - this may help you
document.getElementById('btnFlightAdd').addEventListener('click', async() => {

	// Q9 complete these statements to read flight details from the form
	const number = document.getElementById('fNumber').value;
	const dest = document.getElementById('destCity').value;
	const date = document.getElementById('theDate2').value;
	const deptime = document.getElementById('departTime').value;
	const arrtime = document.getElementById('arriveTime').value;
	const thePrice = document.getElementById('price').value;
	const numSeats = document.getElementById('numSeats').value;

	// Q9 complete the fetch API call to send the data to the 'add flight'
	// route on the server as a POST request...
	const response = await fetch('http://localhost:3000/flightadd', {
		method: 'POST',
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			number: number,
			dest: dest,
			fdate: date,
			deptime: deptime,
			arrtime: arrtime,
			price: thePrice,
			numSeats
		})
	})

	const json = await response.json();

	// Q12 modify Q9 answer to handle non-200 status codes. Ensure that
	// user-friendly error messages are displayed to the user in the
	// 'flightAddStatus' <div>.
	if (json.status !== 200) {
		document.getElementById('flightAddStatus').innerHTML =
			`<div>
                <p>json.error</p>
             </div>`;
	}

});

// Q13 replace the ????? so that this event listener handles click events on
// the login button
// Note the event listener has been setup to be an async function - this may help you
document.getElementById('btnLogin').addEventListener('click', async() => {

	// Q13 complete these statements to read login details from the form
	const u = document.getElementById('user').value;
	const p = document.getElementById('pass').value;

	// Q13 complete the fetch API call to send the data to the login 
	// route on the server as a POST request...
	const response = await fetch('http://localhost:3000/login/', {
		method: 'POST',
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify({
			username: u,
			password: p
		})
	})

	// Q14 modify Q13 answer so that if the user did not log in correctly, 
	// a user-friendly error message is displayed to the user in the
	// 'loginStatus' <div>.
	if(response.status == 401) {
		document.getElementById('loginStatus').innerHTML = `
            <p style="color:red">invalid username or password!<p>
        `
	} else {
		document.getElementById('loginStatus').innerHTML = `
            <p style="color:green">Login successful<p>
        `
	}
});
