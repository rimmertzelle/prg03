window.addEventListener('load', init);


function init()
{
    getAllRecipes();

    // opdracht: bouw een event listener die luistert of er in de container wordt geklikt
    // de event listener roept vervolgens recipeClickHandler aan
}



//
// get all recipes
//
function getAllRecipes()
{
    
    var parameters = {
        dataType: 'json',
        url: '../server/dishes.php'
    };

    // via een ajax call halen we de json uit php
    $.ajax(parameters).done(showRecipes);
}

//
// get recipe details
//
function getRecipeDetails(data)
{
    // nu gaan we het id meegeven, zodat php weet dat we detailinformatie willen hebben
    var parameters = {
        dataType: 'json',
        url: '../server/dishes.php',
        data : data
    };

    //Actual AJAX call (only jQuery needed!)
    $.ajax(parameters).done(showRecipeDetails);
}



//
// show json data in html page
//
function showRecipes(data)
{
	console.log("json is geladen");
    console.log(data.dishes);

    for(var i = 0; i<data.dishes.length;i++){
    	var dish = data.dishes[i];
    	console.log(dish.name);
        // opdracht: maak nieuwe html elementen in de dish gallery aan waarin de json data wordt getoond.

    }
}


//
// an element in the container was clicked
//
function recipeClickHandler(event)
{
    // hier kan je kijken op welk element is geklikt
    var target = event.target;

    // check of er op een recept image is geklikt
    console.log("id of target is " + e.target.id);
    var data = {id: target.id};

    // roep nu getRecipeDetails aan met dit data object

}

//
// show recipe details
//
function showRecipeDetails(data)
{
    // Opdracht: vul de dish-details div met alle afbeeldingen van de aangeklikte item
}
