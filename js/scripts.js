$(document).ready(function() {
  $("#name").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();

    $(".booking-success").text("booking successful");
  });
});
