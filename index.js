var randNumber1=Math.floor(Math.random()*6)+1;
var randImagesrc="images/"+"dice"+randNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randImagesrc);

var randNumber2=Math.floor(Math.random()*6)+1;
var randImagesrc2="images/dice"+randNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randImagesrc2);

if(randNumber1>randNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!!"

}
else if(randNumber2>randNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!!🏁"

}