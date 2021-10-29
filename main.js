
var last_x,last_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var color="black";
width_of_line=1;

var width=screen.width
new_width =screen.width - 70;
new_height =screen.height - 300;
if(width<900){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").width=new_height;
document.body.style.overflow="hidden";

}
canvas.addEventListener("touchstart",mytouchstart)//When touchstart event happens call my touchstart function
function mytouchstart (e){//This is my touchstart function which needs to be called when touch event happens
console.log("mytouchstart")
last_x=e.touches[0].clientX - canvas.offsetLeft;
last_y=e.touches[0].clientY - canvas.offsetTop;
}


canvas.addEventListener("touchmove",mytouchmove)
function mytouchmove (e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();

    last_x= current_position_of_touch_x;
    last_y=current_position_of_touch_y;

}
