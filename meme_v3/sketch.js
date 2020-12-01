/*
   meme v3
   animated meme/ logo
*/

var x = 0;
var y = 100;
var s = 100;
var xSpeed = 3;
var ySpeed = 3;
var c = ('grey');

var count = 0;

var yodaaImage;

function preload () {
	yodaaImage = loadImage ('yodaa.jpg');
}

function setup () {
	createCanvas (640, 360);
	noStroke();
	imageMode (CENTER)

	var r = random (255);
	var g = random (255);
	var b = random (255);

	c = color (r, g, b);
}

function draw () {
	background ('black');

	image (yodaaImage, x, y, s, s);

	fill (c);
	//triangle (x + 200, y, x + 50, y + 100, x + 300, y + 150, 5);
	textSize (12);
	textAlign (CENTER, CENTER);
	textStyle (BOLD);
	text ("Bank account looking at me shopping online", x, y, s);

	count++;
	if (count == 60) {
		s = random (100, 100);
		count = 0
	}

	x += xSpeed;
	y += ySpeed;

     // hits right or left side of canvas
	 if (x > width || x < 0) {
	 	// reverse speed
	 	xSpeed *= -1;
	 	var r = random (255);
	    var g = random (255);
	    var b = random (255);
	 	s = random (200);
	 	c = ("white");

	 }

	 // hits top or bottom side of canvas
	 if (y > height || y < 0) {
	 	// reverse speed
	 	ySpeed *= -1;
	 	var r = random (105);
	    var g = random (255);
	    var b = random (255);
	 	c = ("blue");
	 }


	
}