const userLogin = async (userData) => {

    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('Request data with JSON response', data);
            console.log('Request username with JSON response', data.username);
            console.log('Request status with JSON response', data.status);
            if(data.status == 'success'){
                location.href = 'http://localhost:3000/'
            }

        })
        .catch(function(error) {
            console.log('Request failed', error);
        });


}

document.getElementById('submitLogin').addEventListener('click', async (e) => {
    e.preventDefault()
    const username = document.querySelector("[name='username']").value;
    const password = document.querySelector("[name='password']").value;

    console.log([username, password])

    userData = {
        username: username,
        password: password
    }
    userLogin(userData)
})
