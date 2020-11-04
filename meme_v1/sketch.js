/*
   Meme V 1
   by tonisha dass
   text + images
*/ 


var description = "describe something on food"

function setup () {
	var canvas = createCanvas (640, 360);
	canvas.drawingContext.miterLimit = 2;
}

function draw() {
	background ("yellow")


    textSize (30);
    fill (122, 87, 175)
    stroke (275);
    strokeWeight(5);
    textStyle("BOLD")
    textFont ("courier new");

    textAlign(CENTER, CENTER);
	text ("My Class Portfolio" , width / 2, height / 2 );

	var titleWidth = textWidth ("My Class Portfolio")

    textSize(14);
    noStroke();
	text(description, 320, height / 2 + 100);



}