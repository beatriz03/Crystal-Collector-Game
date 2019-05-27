var crystal ={
    blue:
    {
        name:'Blue',
        value:0
    },
    green:
    {
        name:'Green',
        value:0
    },
    red:
    {
        name:'Red',
        value:0
    },
    yellow:
    {
        name:'Yellow',
        value:0
    }
}

var winCount=0;
var lossCount=0;
var currentScore=0;
var targetScore=0;

function getrandom(min, max) {
    return Math.floor(Math.random() * (max - min +1)) +min;
}

function startGame() {
    currentScore=0;

//get new target score
    targetScore = getrandom(19, 120);

//generate random value for each crystal
    crystal.blue.value = getrandom(1, 12);
    crystal.green.value = getrandom(1, 12);
    crystal.red.value = getrandom(1, 12);
    crystal.yellow.value = getrandom(1, 12);


$('#yourScore').html('<strong>Points So Far: </strong><br>' + currentScore);
$('#targetScore').html('<strong>Number to match: </strong><br>' + targetScore);


console.log('---------------');
console.log('Target Score ' + targetScore);
console.log('Blue: ' + crystal.blue.value + ' | Green: ' + crystal.green.value + ' | Red: ' + crystal.red.value + ' | Yellow: ' + crystal.yellow.value);
console.log('---------------');
}


function addValues (crystal){
    currentScore=currentScore + crystal.value;
    
    $('#yourScore').html('<strong>Points So Far: </strong><br>' + currentScore);
    
    checkWin();
}

function checkWin(){
    if (currentScore > targetScore) {
        alert('You lost!');
        lossCount++;

        $('#lossCount').html('<strong>Losses: </strong>' + lossCount);
        startGame();
    } 
    
    
    else if (currentScore == targetScore) {
        alert('You win! Excellent crystal collecting!');
        winCount++;

        $('#winCount').html('<strong>Wins: </strong>' + winCount);
        startGame();
    }

}


startGame();

    $('#bluecrystal').on('click', function() {
        addValues(crystal.blue);
    });

    $('#greencrystal').on('click', function() {
        addValues(crystal.green);
    });

    $('#redcrystal').on('click', function() {
        addValues(crystal.red);
    });

    $('#yellowcrystal').on('click', function() {
        addValues(crystal.yellow);
    });
