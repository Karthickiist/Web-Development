randomnum1=Math.random();
randomnum1=Math.floor(randomnum1*6)+1;
imagef="./images/dice"+randomnum1+".png";
image1=document.querySelectorAll("img");
image1[0].setAttribute("src",imagef);

randomnum2=Math.random();
randomnum2=Math.floor(randomnum2*6)+1;
imagef1="./images/dice"+randomnum2+".png";
image1[1].setAttribute("src",imagef1);

heading= document.querySelector("h1");
if (randomnum1==randomnum2){
    heading.innerHTML="It is Draw"
}
else if(randomnum1>randomnum2){
    heading.innerHTML="Player 1 Wins"
}
else {
    heading.innerHTML="Player 2 Wins"
}