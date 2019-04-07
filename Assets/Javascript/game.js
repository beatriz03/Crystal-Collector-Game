var computerChoice = [18-120];
var crystalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var randomNumber = 0;    
var wins = 0;
var losses = 0;

    var randomNumber= document.getElementById("randomNumber-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");

    
    $(".bluecrystal").on("click", function() {
        var randomNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];


       if (pointSoFar > randomNumber) {
        losses++
       } else if (pointsSoFar == randomNumber) {
        wins++
       }

