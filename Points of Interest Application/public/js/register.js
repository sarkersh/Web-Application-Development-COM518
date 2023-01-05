

/*
default return false, return true if has errors
*/

function validateInput(userName, password, passwordConfirmation) {
    //check user name
    const USER_REG = /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;
    if(userName.match(USER_REG)) {
        $("#userName").removeClass("is-invalid");
    } else {//empty username input or invalid username
        $("#userName").addClass("is-invalid");
    }

    //check password
    if(password.length > 2) {
        $("#password").removeClass("is-invalid");
    } else {
        $("#password").addClass("is-invalid");
    }

    //check passwordConfirmation
    if(passwordConfirmation === password){
        $("#passwordConfirmation").removeClass("is-invalid");
    }else {
        $("#passwordConfirmation").addClass("is-invalid");
    }

    if(!userName.match(USER_REG) || password.length <= 2 || password !== passwordConfirmation)
        return true; //has errors

    return false;
}

function handleClickRegistration() {
    $("#registerBtn").on("click", function(event) {
        event.preventDefault();

        let fullName = $("#fullName").val();
        let email = $("#email").val();
        let userName = $("#userName").val();        
        let password = $("#password").val();
        let passwordConfirmation = $("#passwordConfirmation").val();

        //validate input
        let check = validateInput(email, password, passwordConfirmation);
        console.log(check);

        if(!check) {
            //send data to node server with ajax
            //url map to http://localhost/register-new-user
            $.ajax({
                url: `${window.location.origin}/register-new-user`,
                method: "POST",
                data: {
                    fullName: fullName,
                    email: email,
                    userName: userName,
                    password: password,
                    passwordConfirmation: passwordConfirmation
                },
                success: function(data) {
                    console.log(data);
                },
                error: function(error) {
                    console.log(error);
                }
            });
        }
    });  
};

$(document).ready(function() {
    handleClickRegistration()
});