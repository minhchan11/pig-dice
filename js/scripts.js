//Defining global variables
var roll1 = 0
var turn1 = 0
var score1 = 0

var roll2 = 0
var turn2 = 0
var score2 = 0

//Business Logic
function PigDice(currentRoll, turnRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.turnRoll = turnRoll;
  this.totalRoll = totalRoll;
};

PigDice.prototype.totalScore = function() {
  if (this.turnRoll === 0) {
    $(".diceTwo,.diceOne").toggle();
  } else if (this.totalRoll > 49) {
    alert("You win!");
  }
};

function generate1() {
  roll1 = Math.floor(Math.random()*6) + 1
  if (roll1 === 1) {
    score1 += turn1
    turn1 = 0;
  } else {
    turn1  += roll1 ;}
};

function generate2() {
  roll2 = Math.floor(Math.random()*6) + 1
  if (roll2 === 1) {
    score2 +=turn2;
    turn2 = 0;
  } else {
    turn2 +=roll2;}
};

//User Logic
$(document).ready(function() {

  $("#player1Roll").last().click(function() {
    generate1();
    $(".numberOne").text(roll1)
    $("#numberOne").text(roll1);
    $(".turnOne").text(turn1);
    $(".totalOne").text(score1);
    var rollOne = roll1;
    var turnOne = turn1;
    var scoreOne = score1;
    var playerOne = new PigDice (rollOne, turnOne,scoreOne);
    console.log(playerOne);
    playerOne.totalScore();

  });

  $("#player2Roll").last().click(function() {
    generate2();
    $(".numberTwo").text(roll2);
    $("#numberTwo").text(roll2);
    $(".turnTwo").text(turn2);
    $(".totalTwo").text(score2);
    var rollTwo = roll2;
    var turnTwo = turn2;
    var scoreTwo = score2;
    var playerTwo = new PigDice (rollTwo,turnTwo,scoreTwo);
    playerTwo.totalScore();

  });

  $("form").submit(function(event) {
    event.preventDefault();
    $(".diceOne,.diceTwo").toggle();
    if (roll1 === 1) {
      score1 += turn1
      turn1 = 0;
    } else {
      turn1  += roll1 ;}
      if (roll2 === 1) {
        score2 +=turn2;
        turn2 = 0;
      } else {
        turn2 +=roll2;}

  });

});
