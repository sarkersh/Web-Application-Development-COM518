$(document).ready(function() {
    $("#registerBtn").on("click", function(event) {
        alert("click the button");
        console.log($("#userName").val());
        console.log($("#password").val());
        console.log($("#passwordConfirmation").val());
    });    
});