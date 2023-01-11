

function handleLoginBtn(){
    $("#loginBtn").on("click", function(event){
        event.preventDefault();
        const email = $("email").val();
        const password = $("password").val();

        $.ajax({
            url: `${window.location.origin}/login`,
            method: "POST",
            data: {email: email, password: password},
            success: function(data) {
                console.log(data);
                window.location.href = "/";
            },
            error: function(error) {
                console.log(error);
                alert(error);
            }

        })
    });
};


//jQuery code
$(document).ready(function(){
    handleLoginBtn();
});