$(document).ready(function(){
	$("form#new-place").submit(function(event){
		event.preventDefault();

		var inputName = $("input#new-location").val();
		var inputDate = $("input#date").val();
		var newPlace = { newLocation: inputName, date: inputDate };

		$("ul#places").append("<li><span class='place'>" + newPlace.newLocation + " " + newPlace.date + "</span></li>");

		$("input#new-location").val("");
		$("input#date").val("");

	});

	$(".place").last().click(function(){
		$("#show-place").show();
		$("#show-place h3").text(newPlace.newLocation + " " + newLocation.date);
		$(".new-location").text(newPlace.newLocation)
		$(".date").text(newPlace.date)

	});

})