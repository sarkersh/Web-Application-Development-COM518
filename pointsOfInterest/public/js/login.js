
function handleLoginBtn() {
    $("#loginBtn").on("click", function(event) {
        event.preventDefault();
        let username = $("#username").val();
        let password = $("#password").val(); 

        $.ajax({
            url: `${window.location.origin}/login`,
            method: "POST",
            data: {username: username, password: password},
            success: function(data) {
                window.location.href = "/";
            },
            error: function(error) {
                console.log(error);
                aleart("Your username or password incorrect. Please try again!");
            }
        });
    });
}

$(document).ready(function () {
    handleLoginBtn();
});