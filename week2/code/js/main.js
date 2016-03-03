//--------------------------- assignment 1 ---------------------------//
console.group("assignment 1");


//Basic variables
var dish = 'spaghetti';
var dishScore = 2;
console.log(dish, dishScore);


console.groupEnd();
//--------------------------- assignment 2 ---------------------------//
console.group("assignment 2");


//First letter + rest of the string
var dishFirstLetter = dish.charAt(0).toUpperCase();
var dishOtherLetters = dish.substr(1);
console.log(dishFirstLetter + dishOtherLetters);


console.groupEnd();
//--------------------------- assignment 3 ---------------------------//
console.group("assignment 3");


var dishScores = [5, 2, 3, 3, 5];
var totalScore = 0;
var dishScoresLength = dishScores.length;
var dishScoreNames = ["", "bleh", "mwah", "ok", "lekker", "mag ik nog meer?"];

for (var i = 0; i < dishScoresLength; i++) {
    //Show name for score
    console.log(dishScoreNames[dishScores[i]]);

    //Add score to totalscore
    totalScore += dishScores[i];
}
var average = totalScore / dishScoresLength;
console.log(average);

var max = Math.max(...dishScores);
console.log(max);


console.groupEnd();
//--------------------------- assignment 4 ---------------------------//
console.group("assignment 4");


/**
 * @param scores
 * @returns {number}
 */
function calculateAverageScore(scores)
{
    var totalScore = 0;
    var scoresLength = scores.length;

    for (var i = 0; i < scoresLength; i++) {
        //Add score to totalscore
        totalScore += scores[i];
    }

    return totalScore / scoresLength;
}
console.log(calculateAverageScore([5, 4, 1, 1, 1, 1, 1]))


console.groupEnd();
//--------------------------- assignment 5 ---------------------------//
console.group("assignment 5");


var spaghetti = {
    name: 'spaghetti',
    dishScores: [3, 5, 2, 4],

    /**
     * @param score
     */
    addScore: function (score)
    {
        this.dishScores.push(score);
    },

    /**
     * @returns {number}
     */
    calculateAverageScores: function ()
    {
        var total = 0;

        for (var value of this.dishScores) {
            total += value;
        }

        return total / this.dishScores.length;
    }
};
console.log(spaghetti.calculateAverageScores());


console.groupEnd();
