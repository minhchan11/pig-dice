//Defining global variables
var roll = 0
var score = 0

//Business Logic
function PigDice(currentRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.totalRoll = totalRoll;
};

PigDice.prototype.totalScore = function() {
  if (this.totalRoll === 0) {
    $(".diceOne").toggle();
  }
};

function generate() {
  roll = Math.floor(Math.random()*6) + 1
  if (roll === 1) {
    score = 0;
  } else { score = score +=roll ;}
};



//User Logic
$(document).ready(function() {

  $("#player1Roll").last().click(function() {
    generate();
    $(".numberOne").text(roll);
    $(".totalOne").text(score);
    var rollOne = roll;
    var scoreOne = score;
    var playerOne = new PigDice (rollOne, scoreOne);
    console.log(playerOne);
    playerOne.totalScore();

  })

  $(".playerOne").submit(function(event) {
    event.preventDefault();
    $(".diceOne").toggle();


  });

});
