$(document).ready(function(){

    $("#submitRoll").on("click", function(event){

        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newRoll = {
            name: $("#rollField").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/rolls", {
            type: "POST",
            data: newRoll
        });

        setTimeout(function(){
            history.go(0);
        }, 1000);
    });

    $(".devour").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        var rollDevoured = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/rolls/" + id, {
          type: "PUT",
          data: rollDevoured
        });

        setTimeout(function(){
            history.go(0);
        }, 1000);
        
      });

});