$(document).ready(function() {
  var card = $("#card");
  var flip = $("#flip_button");
  
  flip.on("click", function(e) {
  	e.preventDefault();

  	card.toggleClass("flipped");
  	flip.attr("disabled", true);
  	
  	setTimeout(function() {
  	  $('.container').fadeOut("slow");
      }, 3000);

  	// card.removeClass("flipped");
  	// flip.attr("disabled", false);

  	// setTimeout(function() {
  	  // $('.container').fadeIn("slow");
   //    }, 2000);

  });
});
