$(document).ready(function() {
    
    $("#submit-button").on("click", function() {
        event.preventDefault();

        var name = $("#name-input").val().trim();
        var number = $("#number-input").val().trim();
        var email = $("#email-input").val().trim();
        var id = $("#id-input").val().trim();


        console.log(name);
        console.log(number);
        console.log(email);
        console.log(id);


    })


})