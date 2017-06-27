jQuery(function() {
console.log("script loaded");
let gameOver = true;


// start game
$('.startButton').click(function()
  {
	   startGame();
   });

// timer when start button clicked
function startGame(){
  if(gameOver){
    shoebillMove();
    gameOver = false;
    timer = setInterval(decrementTime, 1000);
  };
}
// get random shoebill to pop up
  function getNewLilly() {
    let lilly = $(.lilly); //gets all lillys
    let randomNumber = Math.floor(math.random()* 9);
    let shoebillToAnimate = Lilly[randomNumber];
    let id = shoebillToAnimate.getAttribute('id');
      animateShoebill(id);
      console.log(id);
  }
