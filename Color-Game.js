var numSquares = 6;
var colors = generaterandomColor(numSquares);

var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = generaterandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ; i < squares.length ; i++){
       if(colors[i]){
        squares[i].style.background = colors[i];
       } else {
           squares[i].style.display = "none";
       }
    } 
   
});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    colors = generaterandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ; i < squares.length ; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    } 
});

resetbutton.addEventListener("click", function(){
    colors = generaterandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0 ; i < squares.length ; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue" ;
    resetbutton.textContent = "New Colors";
    messageDisplay.textContent = "";
});

colorDisplay.textContent = pickedColor;


for(var i=0 ; i < squares.length ; i++){
    /* add initial color to squares */
    squares[i].style.background = colors[i];
    /* add click listeners to squares  */
    squares[i].addEventListener("click", function(){
        /* grab color of clicked square */
        var clickedColor = this.style.background;
        /* compare picked color to clicked color*/
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetbutton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor ;
        } else { 
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!!!";
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = color ;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomColor(num){
    var arr = []
    for(var i=0 ; i < num ; i++){
        arr.push(randomColor())
    }
    return arr ;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}
