

var  b=Math.random();
b=Math.floor((b*6)+1);
var randompic1="dice"+ b +".png";
var  a=Math.random();
a=Math.floor((a*6)+1);
var randompic="dice"+ a +".png";
if(b>a){
    document.querySelector("h p").innerHTML=" Congratulations ! Player 1 wins";
     document.querySelectorAll("img")[0].setAttribute("src",randompic1);
     document.querySelectorAll("img")[1].setAttribute("src",randompic);
    
    
}
else if(a==b){
    document.querySelector("h p").innerHTML="Draw";
     document.querySelectorAll("img")[0].setAttribute("src",randompic);
     document.querySelectorAll("img")[1].setAttribute("src",randompic1);
}
else{
    document.querySelector("h p").innerHTML=" Congratulations ! Player 2 wins";
    document.querySelectorAll("img")[0].setAttribute("src",randompic1);
     document.querySelectorAll("img")[1].setAttribute("src",randompic);
}
