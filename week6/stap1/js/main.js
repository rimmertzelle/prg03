window.addEventListener("load", init);

var filmdata;

function init(){
	$.ajax({
	  dataType: "json",
	  url: "http://swapi.co/api/films/",
	  success: moviesloaded
	});
}


function moviesloaded(data){
	console.log("filmdata geladen " + data);

	filmdata = data;

	for(var i=0;i<data.results.length;i++){
		var film = data.results[i];

		console.log(film.title);

		var card = document.createElement("div");
		card.id = i;
		card.classList.add("card");
	
		document.body.appendChild(card);

		card.addEventListener("click", cardclicked);
	}
}

function cardclicked(event){
	var card = event.currentTarget;
	card.removeEventListener("click", cardclicked);

	var id = parseInt(card.id);
	console.log("clicked on card " + id);

}
