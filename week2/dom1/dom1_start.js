var receipts = document.getElementsByTagName('li');
var total = 0.0;

// test of je de tags hebt gevonden
console.log(receipts); 

// loop nu door de bonnetjes heen
for (var i = 0; i < receipts.length; i++) {
	var string_bedrag = receipts[i].innerHTML; 
	total += parseFloat(string_bedrag);

	// test
	console.log("totaal is nu " + total);

	// hint: je kan 'toFixed' gebruiken om het getal mooi af te ronden
	console.log("afgerond getal is " + total.toFixed(2));
}

//
// OPDRACHT 1: TOON HET TOTAAL IN DE DIV MET HET ID "total"
//
var totalPlaceholder = // zoek de juiste div
totalPlaceholder.... // plaats het totaal in deze div


//
// OPDRACHT 2: PLAATS ALLE BOVENSTAANDE CODE IN FUNCTIES
//