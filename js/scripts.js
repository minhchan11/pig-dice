//Defining global variables
var roll = 0
var score = 0

//Business Logic
function PigDice(currentRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.totalRoll = totalRoll;
}


function generate() {
  roll = Math.floor(Math.random()*6) + 1
  score = score +=roll;
}

PigDice.prototype.totalScore = function() {
  return this.currentRoll = roll;
  return this.totalRoll = score;
}





//User Logic
$(document).ready(function() {

  $("#player1Roll").last().click(function() {
    generate();
    $(".numberOne").text(roll);
    $(".totalOne").text(score);


  })

  $(".playerOne").submit(function(event) {
    event.preventDefault();






  });

});
