buttons=["red", "blue","green", "yellow"];
game_pattern=[];
buttonsPressed=[];
level=1;
answercounter=0;
started=false;

$(".btn").click(function(){
    checker(this);
});


document.addEventListener("keypress",function(event){
    if(event.key.toUpperCase()=="A"){
        if(!started){
            next_sequence();
            started=true;
        }
    }
});

function next_sequence(){
    $("#level-title").text("Level "+level);
    var random_number=Math.floor(Math.random()*4);
    var random_chosen_color=buttons[random_number];
    game_pattern.push(random_chosen_color);
    make_sound(random_chosen_color);
    $("#"+random_chosen_color).fadeOut("fast").fadeIn("fast");
    level++;

    
}

function make_sound(chosen_color){
    var audio="";
    switch(chosen_color){
        case "blue":
            audio=new Audio("sounds/blue.mp3");
            break;
        case "green":
            audio=new Audio("sounds/green.mp3");
            break;
        case "red":
            audio=new Audio("sounds/red.mp3");
            break;
        case "yellow":
            audio=new Audio("sounds/yellow.mp3");
            break;
        default:
            audio=new Audio("sounds/wrong.mp3");
            break;
    }
    audio.play();
}

function checker(clicked){
    clickedColor=clicked.id;
    if(clickedColor==game_pattern[answercounter]){
        make_sound(clickedColor);
        buttonAnimate();
        answercounter++;
        if(answercounter==level-1){
            setTimeout(next_sequence,1000);
            answercounter=0;
        }
    }     
    else{
        wrongAnswer();
    }

}

function wrongAnswer(){
    make_sound("wrong");
    buttonAnimate();
    $("#level-title").text("Game Over!, Press any key to start..");
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200);
    started=false;
    restart();
}

function buttonAnimate(){
    $("#"+clickedColor).addClass("pressed");
    setTimeout( function(){$("#"+clickedColor).removeClass("pressed");},100);
}

function restart(){
    level=1;
    answercounter=0;
    game_pattern=[];
    document.addEventListener("keypress",function(){
        if(!started){
            next_sequence();
            started=true;
        }
    });
}