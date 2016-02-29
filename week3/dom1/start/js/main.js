// MAAK DEZE CODE AF - IN WELKE TAGS STAAN DE PRIJZEN DIE JE WIL OPTELLEN?
var receipts = document.getElementsByTagName(...?...);
var total = // OP WELKE WAARDE BEGINT HET TOTAAL?

// TEST OF JE DE JUISTE TAGS HEBT
console.log(receipts); 

// LOOP
for (var i = 0; i < receipts.length; i++) {
	// DIT GEEFT DE INHOUD VAN EEN TAG ALS STRING TERUG
	var valueAsString = receipts[i].innerHTML;
	
	// JE KAN PARSEFLOAT GEBRUIKEN OM EEN STRING OM TE ZETTEN NAAR EEN GETAL
	// var b = "100";
	// a = parseFloat(b);

	// je kan 'toFixed' gebruiken om een getal mooi af te ronden
	// var b = 100.122102
	// var a = b.toFixed(2));
}

//
// OPDRACHT 1: TOON HET TOTAAL IN DE DIV MET HET ID "total"
//
var totalPlaceholder = // zoek de juiste div
totalPlaceholder // plaats het totaal in deze div


//
// OPDRACHT 2: PLAATS ALLE BOVENSTAANDE CODE IN FUNCTIES
//
