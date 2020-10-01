/* 
   self portrait v2
   by tonisha dass
*/

// global scope 
var x = 350; // character origin
var y = 200;

var eyeSize = 100;
var mouthSize= eyeSize;

var faceRed = 166;
var faceGreen = 11;
var faceBlue = 53;

var leftEyeX = 200; // statement
var rightEyeX = 400;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background ('yellow');


   //face
   noStroke();
   fill(faceRed,faceGreen,faceBlue); //red
   quad(x-200,y-150,x+100,y-160,x+180,y+150,x-200,y+130);
   

   //eyes
   fill(138,194,10); //green
   triangle(x-150,y-50, x-50,y-50, x-100,y,eyeSize); //left

   fill(16,172,155); //blue
   circle(x+50,y-50,eyeSize) //right

    //nose
    fill(139,114,201); //mauve
    square(x-50,y,50) 


    // mouth
    fill(208,9,90); //pink
    stroke(17,13,245); //purple
	rect(x-100, y+70, mouthSize, mouthSize / 18, mouthSize / 10);

    //hair
    stroke(81,183,186); //blue
    strokeWeight(7);
    line(x-150,y-150,x-150,y-60);
    line(x-140,y-150,x-140,y-60);
    line(x-130,y-150,x-130,y-60);
    line(x-120,y-150,x-120,y-60);
    line(x-110,y-150,x-110,y-60);
    line(x-100,y-150,x-100,y-60);
    line(x-90,y-150,x-90,y-60);
    line(x-80,y-150,x-80,y-60);
    line(x-70,y-150,x-70,y-60);
    line(x-60,y-150,x-60,y-60);
    line(x-50,y-150,x-50,y-60);
    line(x-40,y-150,x-40,y-60);
    line(x-30,y-150,x-30,y-60);
    line(x-20,y-150,x-20,y-60);
    line(x-10,y-150,x-10,y-60);
    line(x-0,y-150,x+0,y-70);
    line(x+10,y-150,x+20,y-80);
    line(x+20,y-150,x+30,y-90);
    line(x+30,y-150,x+40,y-100);
    line(x+40,y-150,x+50,y-100);
    line(x+50,y-150,x+60,y-100);
    line(x+60,y-150,x+70,y-100);

    // visualize origin
    stroke ("lightgreen");
    circle (x, y, 5);

     
}