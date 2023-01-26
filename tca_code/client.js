
// Q1 replace the ????? so that this event listener handles click events on
// the 'search for flight' button
document.getElementById('btnFlightSearch').addEventListener('click', () => {

	// Q2 complete these statements to read destination and date from form
	const city = document.getElementById("theDest").value;
	const date = document.getElementById("theDate").value;
	console.log(city, date)

	// Q3 complete the fetch API call to send the user's chosen city and
	// date to the 'flight search' route in server.js. You will need to look
	fetch('http://localhost:3000/search/?city='+city + '&date=' + date,{
		headers: {
			'Content-Type': 'application/json'
		},
		method: "get"
	}).then (response => response.json())
	    .then(json => {
			document.getElementById('fNumber').value=response.json().fNumber;
			document.getElementById('destCity').value=response.json().endcity;
			document.getElementById('theDate2').value=response.json().date;
			document.getElementById('departTime').value=response.json().depart;
			document.getElementById('arriveTime').value=response.json().arrive;
			document.getElementById('price').value=response.json().price;
			document.getElementById("numSeats").value=response.json().nseats;

		// Q6 complete so that it parses the JSON returned and outputs the
		// data to the searchResults <div> in the format shown on the paper.

		// Q8 update with a book button - see question paper
	});	

});

// Q9 replace the ????? so that this event listener handles click events on
// the 'add flight' button
// Note the event listener has been setup to be an async function - this may help you
document.getElementById('btnFlightAdd').addEventListener('click', async() => {

	// Q9 complete these statements to read flight details from the form
	const number = document.getElementById("fNumber").value;
	const dest = document.getElementById("destCity").value;
	const date =document.getElementById("theDate2").value;
	const deptime = document.getElementById("departTime").value;
	const arrtime = document.getElementById("arriveTime").value;
	const thePrice = document.getElementById("price").value;
	const numSeats = document.getElementById("numSeats").value;

	// Q9 complete the fetch API call to send the data to the 'add flight'
	// route on the server as a POST request... 
	fetch(`/flightbook/:flightId${flightID}`).then (response => response.json())
	    .then(json => {
	// Q12 modify Q9 answer to handle non-200 status codes. Ensure that
	// user-friendly error messages are displayed to the user in the
	// 'flightAddStatus' <div>.
});

// Q13 replace the ????? so that this event listener handles click events on
// the login button
// Note the event listener has been setup to be an async function - this may help you
document.getElementById('btnLogin').addEventListener('click', async() => {

	// Q13 complete these statements to read login details from the form
	const u = document.getElementById("user").value;
	const p = document.getElementById("pass").value;
	fetch(`http://localhost:3000/login?`).then (response => response.json())
	    .then(json => {
	// Q12 modify Q9 answer to handle non-200 status codes. Ensure that
	// user-friendly error messages are displayed to the user in the
	// 'flightAddStatus' <div>.
	});

	// Q13 complete the fetch API call to send the data to the login 
	// route on the server as a POST request... 

	// Q14 modify Q13 answer so that if the user did not log in correctly, 
	// a user-friendly error message is displayed to the user in the
	// 'loginStatus' <div>.
});
