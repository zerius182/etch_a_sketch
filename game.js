function sketch(e){
    if(active){
        e.target.style.backgroundColor =  colour;
        SCRIBBLE.play();
    }
    playMusic();
}

function buttonDown(){
    active = true;
}

function buttonUp(e){
    active = false;
    e.stopPropagation();
}

function clearScreen(){
    ETCH_A_SKETCH.innerHTML = "";
    setUpScreen();
}

function changeColour(e){
    colour = e.target.value;
    console.log(colour);
}

CLEARBUTTON.addEventListener("click", clearScreen);
ETCH_A_SKETCH.addEventListener("mouseleave", buttonUp);
COLOURBUTTON.addEventListener("change", changeColour);

setUpScreen();