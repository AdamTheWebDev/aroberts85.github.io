jQuery(function() {
console.log("script loaded");
let gameOver = true;
let shoebillWhacked = 0;
let shoebillHit = false;
let level = 1;
let time = 10;
let timer;
let shoebillsLeft = 3;
let shoebillInterval;
let highScore = 0;
let gameInterval = 1500;

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
    let lilly = $('.lilly'); //gets all lillys
    let randomNumber = Math.floor(Math.random()* 9);
    let shoebillToAnimate = lilly[randomNumber];
    let id = shoebillToAnimate.getAttribute('id');
      animateShoebill(id);
      console.log(id);
  }
// have shoebill showup and disapear
function animateShoebill(id){
  $('#' + id).addClass('active');
  setTimeout(function() {
      $('#' + id).removeClass('active');
      if(!shoebillHit){
        livesLeft();
      }
      shoebillHit = false;
  },
  (gameInterval -50));
}

// speeding up game for next level
function shoebillMove(){
  shoebillInterval = setInterval(shoebillMoving, gameInterval);
}
function shoebillMoving(){
  getNewLilly();
}
// click active shoebill increase score by 1
$('.lilly').click(function(){
    let lil = $(this);
    if(lil.hasClass('active'))
    {
      lil.removeClass('active');
      incrementScore();
      shoebillHit = true;
    }
})
// make score increase by 1 each click event
function incrementScore(){
  shoebillWhacked += 1;
  $('#score').html(shoebillWhacked);
}

function decrementTime(){
  time -= 1;
  $('#timer').text(time);
  if (time == 0){
    endgame();
    console.log(time);
    clearInterval(timer);
    clearInterval(shoebillInterval);
    incrementLevel();
    resetTime();
  }
}
// increase speed of each game level
function incrementLevel(){
  level += 1;
  $('#level').html(level);
  gameInterval -= 150;
}

function resetTime(){
  time = 15;
  return time;
}
function decrementTime()
{
	time -= 1;
	$('#timer').text(time);
	if (time == 0)
	{
		endGame();
		console.log(time);
		clearInterval(timer);
		clearInterval(shoebillInterval);
		incrementLevel();
		resetTime();
	}
}
function livesLeft()
{
	if (shoebillsLeft <= 0)
	{
		endGame();
		if (gameOver)
		{
			var x = confirm("Did you want to try and get them again?");
			if (x)
			{
				shoebillsLeft = 4;
				time = 10;
				clearInterval(shoebillInterval);
				clearInterval(timer);
				setTimeout(startGame, 1500);
			}
			else
			{
				location.reload(true);
			}
		}
	}
	shoebillsLeft -= 1;
	$('#livesLeft').html(shoebillsLeft);
}

function endGame(){
  gameOver = true;
}
})
