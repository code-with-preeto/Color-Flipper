const body = document.querySelector("body");

function changeColor(color){
     body.style.background=color;
}
function randomColor(){
    const red=Math.round(Math.random()*255);
    const green=Math.round(Math.random()*255);
    const blue=Math.round(Math.random()*255);
    
    const finalColor = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = finalColor;
    // console.log(Math.round(Math.random()));
}
