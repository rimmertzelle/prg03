window.addEventListener("load", init);

var filmdata;

function init(){
	$.ajax({
	  dataType: "json",
	  url: "http://swapi.co/api/films/",
	  success: allfilmsloaded
	});
}


function allfilmsloaded(data){

	filmdata = data;

	for(var i=0;i<data.results.length;i++){
		console.log(data.results[i].title);

		var card = document.createElement("div");
		card.id = i;
		card.classList.add("card");

		var film = data.results[i];

		var strTitle = "<h3>" + film.title + "</h3><p>" + film.director + "  ("+ film.release_date +")</p>";
		var strIntro = film.opening_crawl;
		var actorLink = "<p>Click for details</p>";

		card.innerHTML = strTitle + strIntro + actorLink;
		card.addEventListener("click", cardClicked);

		document.body.appendChild(card);
	}

}

function cardClicked(event){
	var card = event.currentTarget;
	card.removeEventListener("click", cardClicked);
	
	var id = event.currentTarget.id;
	var filmobject = filmdata.results[parseInt(id)];
	var urls = filmobject.characters;	

	for(var i = 0;i<urls.length; i++) {
		var div = document.createElement("div");
		div.innerHTML = urls[i];
		card.appendChild(div);
		//
		// TO DO
		//
		// Maak hier een AJAX call die de url aanroept
		// lees dan de naam van het character
		// en plaats die naam in de div
		//
	}
}