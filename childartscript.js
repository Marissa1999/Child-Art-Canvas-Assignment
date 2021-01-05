/*

Use the HTML5 canvas and JavaScript to draw a simple house, including a triangular roof, and a stick figure next to the house.
The stick figure should have a mouth and 2 eyes, hair is optional.

*/

groundCreation();
stickBody();
leftArm();
rightArm();
rightHand();
leftHand();
rightLeg();
leftLeg();
rightFoot();
leftFoot();
face();
smile();
eyes();
stickFigureHair();
roofCreation();
houseCreation();
doorCreation();
sunCreation();
displayTitle();
provideSignature();



function groundCreation()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(500, 300);
ctx.strokeStyle = "#228B22";
ctx.stroke();
}




function stickBody()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(390, 230);
ctx.lineTo(390, 310);
ctx.strokeStyle = "#DC143C";
ctx.stroke();
}




function leftArm()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(390, 250);
ctx.lineTo(330, 210);
ctx.strokeStyle = "#DC143C";
ctx.stroke();
}
 
 
 

function rightArm()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(390, 250);
ctx.lineTo(450, 210);
ctx.strokeStyle = "#DC143C";
ctx.stroke();
}




function rightHand()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(450, 210);
ctx.lineTo(470, 220);
ctx.strokeStyle = "#FFA07A";
ctx.stroke();
}



function leftHand()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(330, 210);
ctx.lineTo(310, 220);
ctx.strokeStyle = "#FFA07A";
ctx.stroke();
}





function rightLeg()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(390, 310);
ctx.lineTo(430, 350);
ctx.strokeStyle = "#000080";
ctx.stroke();
}




function leftLeg()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(390, 310);
ctx.lineTo(350, 350);
ctx.strokeStyle = "#000080";
ctx.stroke();
}



function rightFoot()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(430, 350);
ctx.lineTo(450, 350);
ctx.strokeStyle = "#000000";
ctx.stroke();
}



function leftFoot()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(350, 350);
ctx.lineTo(330, 350);
ctx.strokeStyle = "#000000";
ctx.stroke();
}



function smile()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(390, 210, 10, 0, Math.PI);
ctx.strokeStyle = "#000000";
ctx.stroke();
}



function face()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(390, 200, 30, 0, 2 * Math.PI);
ctx.strokeStyle = "#CD853F";
ctx.stroke();
ctx.fillStyle = "#FFA07A";
ctx.fill();
}






function eyes()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

//Creating the Right Eye Cornea
ctx.beginPath();
ctx.arc(400, 195, 4, 0, 2 * Math.PI);
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.fillStyle = "#F8F8FF";
ctx.fill();


//Creating the Left Eye Cornea
ctx.beginPath();
ctx.arc(380, 195, 4, 0, 2 * Math.PI);
ctx.strokeStyle = "#000000";
ctx.stroke();
ctx.fillStyle = "#F8F8FF";
ctx.fill();


//Creating the Right Eye Iris/Pupil
ctx.beginPath();
ctx.arc(400, 195, 1.5, 0, 2 * Math.PI);
ctx.strokeStyle = "#1E90FF";
ctx.stroke();
ctx.fillStyle = "#000000";
ctx.fill();


//Creating the Left Eye Iris/Pupil
ctx.beginPath();
ctx.arc(380, 195, 1.5, 0, 2 * Math.PI);
ctx.strokeStyle = "#1E90FF";
ctx.stroke();
ctx.fillStyle = "#000000";
ctx.fill();
}






function roofCreation()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

//Creating a Triangle
ctx.beginPath();
ctx.moveTo(130, 200);
ctx.lineTo(200, 70);
ctx.lineTo(280, 200);

//Adding a Linear Gradient Style
var grd = ctx.createLinearGradient(230,10,140,200);
grd.addColorStop(0, "#DAA520");
grd.addColorStop(1, "#8B0000");

//Filling the Triangle (Roof)
ctx.fillStyle = grd;
ctx.fill();
}	






function houseCreation()	
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

//Adding a Radial Gradient Style
var grd = ctx.createRadialGradient(80,90,5,160,140,200);
grd.addColorStop(0, "#FFFF00");
grd.addColorStop(1, "#A0522D");

//Filling the Rectangle (House)
ctx.fillStyle = grd;
ctx.fillRect(130, 200, 150, 140);
}






function doorCreation()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");


//Adding a Radial Gradient Style
var grd = ctx.createRadialGradient(175,300,185,195,260,9);
grd.addColorStop(0, "#FF8C00");
grd.addColorStop(1, "#FF7F50");


//Filling the Rectangle (Door)
ctx.fillStyle = grd;
ctx.fillRect(175, 260, 60, 80);


//Creating a Circle (Door Knob)
ctx.beginPath();
ctx.arc(220, 300, 4, 0, 2 * Math.PI);
ctx.strokeStyle = "#8B0000";
ctx.stroke();
ctx.fillStyle = "#8B0000";
ctx.fill();
}





function sunCreation()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(90, 80, 40, 0, 2 * Math.PI);
ctx.strokeStyle = "#FFD700";
ctx.stroke();
ctx.fillStyle = "#FFF000";
ctx.fill();
}





function stickFigureHair()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

//Creating a Bezier Curve (Left Hair Strand)
ctx.beginPath();
ctx.moveTo(388, 170);
ctx.bezierCurveTo(446, 167, 400, 269, 463, 267);
ctx.strokeStyle = "#000000";
ctx.stroke();


//Creating a Bezier Curve (Right Hair Strand)
ctx.beginPath();
ctx.moveTo(388, 170);
ctx.bezierCurveTo(337, 169, 383, 269, 320, 267);
ctx.strokeStyle = "#000000";
ctx.stroke();
}





function displayTitle()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "35px Cooper Black";
ctx.fillStyle = "#663399";
ctx.textAlign = "center";
ctx.fontWeight = "bold";
ctx.fillText("Wild Child Canvas", 190, 415);
}





function provideSignature()
{
var canvas = document.getElementById("childCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "20px Lucida Handwriting";
ctx.fillStyle = "#008080";
ctx.textAlign = "center";
ctx.fontWeight = "bold";
ctx.fillText("Marissa Goncalves", 370, 465);
}
