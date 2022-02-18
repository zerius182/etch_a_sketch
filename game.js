function sketch(e){
    if(active){
        e.target.style.backgroundColor =  colour;
    }
}

function buttonDown(){
    active = true;
}

function buttonUp(){
    active = false;
}

function clearScreen(){
    ETCH_A_SKETCH.innerHTML = "";
    setUpScreen();
}

CLEARBUTTON.addEventListener("click", clearScreen);
ETCH_A_SKETCH.addEventListener("mouseleave", buttonUp);

setUpScreen();