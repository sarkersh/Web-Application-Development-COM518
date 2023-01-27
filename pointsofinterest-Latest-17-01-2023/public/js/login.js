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
        .then(function(loginResult) {

            if(loginResult.status == 'success'){
                location.href = 'http://localhost:3000/'
            }

            const messageBox = document.getElementById('message-box');
            if(loginResult.status == 'error'){
                messageBox.classList.add('error');
                messageBox.classList.remove('success');
                messageBox.innerHTML = `<strong>${loginResult.status}:</strong> ${loginResult.message}`;
            }else{
                messageBox.classList.add('error');
                messageBox.classList.remove('success');
                messageBox.innerHTML = `<strong>Error:</strong> ${loginResult}`;
            }

        })
        .catch(function(error) {
            const messageBox = document.getElementById('message-box');
            messageBox.classList.add('error');
            messageBox.classList.remove('success');
            messageBox.innerHTML = `<strong>Error:</strong> Invalid username or password`;

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
