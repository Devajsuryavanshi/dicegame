
function dice(){
  var ran = Math.floor((Math.random() * 6)+1);
  return ran;
}
function begin(){

var player_1 = dice();
var player_2 = dice();

if(player_1 > player_2){
  document.querySelector("h1").innerHTML="Player 1 won";
}
else if(player_1 === player_2){
  document.querySelector("h1").innerHTML="Its a Tie";
}
else{
  document.querySelector("h1").innerHTML="Player 2 won";
}
var dice_one = "images/" + "dice"+ player_1 +".png";
var dice_two = "images/" + "dice"+ player_2 +".png";

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src",dice_one);
image2.setAttribute("src",dice_two);

}
