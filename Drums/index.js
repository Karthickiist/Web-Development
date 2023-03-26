

buttons=document.querySelectorAll("button");
for(i=0; i<buttons.length;i++){
    buttons[i].addEventListener("click",clicked);
}

function clicked(){
    makesound(this.innerHTML);
    animate_button(this.innerHTML);
}

document.addEventListener("keypress",function(eve_s){
    makesound(eve_s.key);
    animate_button(eve_s.key);
});

function makesound(key){
    var sounds="";
    switch(key){
        case "w":
            sounds=new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            sounds=new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            sounds=new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            sounds=new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            sounds=new Audio("./sounds/crash.mp3");
            break;
        case "k":
            sounds=new Audio("./sounds/kick-bass.mp3");
            break;
        case "l":
            sounds=new Audio("./sounds/snare.mp3");
            break;
        default:
            break;
    }
    sounds.play();
}

function animate_button(key_pressed){
   var active_button=document.querySelector("."+key_pressed);
   active_button.classList.add("pressed");
   setTimeout(function() {active_button.classList.remove("pressed");},100);
}
