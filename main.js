canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_line = 1;
var lastpositionofx, lastpositionofy;
var mouse_event = "empty";

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouse_event = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouse_event = "mouseleave";
}

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouse_event = "mouseDown";
    color = document.getElementById("Color").value;
    width_line = document.getElementById("Line_Width").value;
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentpositionofx = e.clientX - canvas.offsetLeft;
    currentpositionofy = e.clientY - canvas.offsetTop;
    console.log(currentpositionofx, currentpositionofy);
    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.moveTo(lastpositionofx, lastpositionofy);
        ctx.lineTo(currentpositionofx, currentpositionofy);
        ctx.stroke();
    }
    lastpositionofx = currentpositionofx;
    lastpositionofy = currentpositionofy;
    console.log(lastpositionofx, lastpositionofy);
}

function clear_canvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

var lastpositionoftouchx,lastpositionoftouchy;
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;

if(width<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",mytouchstart)

function mytouchstart(e){
    lastpositionoftouchx = e.touches[0].clientX - canvas.offsetLeft;
    lastpositionoftouchy = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove",mytouchmove);

function mytouchmove(e) {
    currentpositionoftouchx = e.touches[0].clientX - canvas.offsetLeft;
    currentpositionoftouchy = e.touches[0].clientY - canvas.offsetTop;
    console.log(currentpositionoftouchx, currentpositionoftouchy);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        ctx.moveTo(lastpositionoftouchx, lastpositionoftouchy);
        ctx.lineTo(currentpositionoftouchx, currentpositionoftouchy);
        ctx.stroke();   
    lastpositionoftouchx = currentpositionoftouchx;
    lastpositionoftouchy = currentpositionoftouchy;
    console.log(lastpositionoftouchx, lastpositionoftouchy);
}

