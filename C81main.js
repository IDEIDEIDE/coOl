var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.strokeWidth = 4;
ctx.arc(300, 200, 50, 0, 2*Math.PI)
ctx.stroke();

canvas.addEventListener("mousedown", mousedown1)

function mousedown1(e){
    mouseX = e.clientX-canvas.offsetLeft
    mouseY = e.clientY-canvas.offsetTop

    Circle(mouseX, mouseY);
    console.log(mouseX)
    console.log(mouseY)
    
}


function Circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.strokeWidth = 4;
    ctx.arc(mouseX, mouseY, 50, 0, 2*Math.PI)
    ctx.stroke();
}