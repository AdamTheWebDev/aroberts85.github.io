jQuery(function() {
console.log("script loaded");

// const gameBoard = document.createElement("div");
//   gameBoard.setAttribute("id","board");
//creates game board divs with id of board
//use a for loop to create array of divs and hole adding each hole

let play = false;
let len = 24;
let score = 0;
let lilyDiv = new Array();
  for(let i = 0; i < len; i++){//create lilyarray of divs
    lilyDiv[i] = document.createElement("div");
    lilyDiv[i].className = "lily";
    document.body.appendChild(lilyDiv[i]);
  };


$(".lily").wrapAll ("<div id = 'gameBoard'></div>");//wrap gameboard around .lily
$("<img src=/Users/adamroberts/code/wdi/shoebill/proj/u1_project01_prompt/aroberts85.github.io/proj1ga/img/shobilltoon.png></img>" ).appendTo(".lily"); //append shoebilldiv to lilydiv
$("img").addClass("shoebillToon");
$("#gameBoard").wrapAll("<div id = 'scoreBoard'></div>")//create score display in new div
$("<button> start</button>").appendTo("h1")
let shoebillToon = document.querySelectorAll(".shoebillToon");
let scoreBoard = document.getElementById("scoreBoard")
function showScore(){
  scoreBoard.innerHTML = "Score:" + score;

}//function that holds scoreboard
//make random function

let random = function(){
  return Math.floor(Math.random() * 10);
}

//game length function
let gameLength = function(){
  let lilyPad = random();
  let lastScore = score;
$(".shoebillToon")
  setTimeout(function(){
  if(score === lastScore){
    showScore();
  }
}, 20000);
}


$("button").on("click",gameLength());//click start button to start game timer
var images = $('img');
var randomHide = function(image){
  let alreadyClicked= $("img").click( function(){
    $(this).hide();//hide shoebill images click
     //when all shoebills are clicked endgame
  });//if it has "already clicked class, then keep hidden"
  let ranShow = Math.floor(Math.random() * 10);
  if (ranShow === 1 ){
    $(image).hide()
    } else {
      $(image).show()
    }
}


$.each(images, function(){
  console.log($(this));
  setInterval(randomHide($(this)), 400);
})

})
