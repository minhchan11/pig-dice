//Defining global variables
var roll = 0


//Business Logic
function PigDice(currentRoll, totalRoll) {
  this.currentRoll = currentRoll;
  this.totalRoll = totalRoll;
}








//User Logic
$(document).ready(function() {
 roll =  Math.floor(Math.random() * 6) +1;
 rollNumber = roll.toString();

  $("#player1Roll").last().click(function() {
    $(".numberOne").text(rollNumber);
  })

  $(".playerOne").submit(function(event) {
    event.preventDefault();






  });

});
