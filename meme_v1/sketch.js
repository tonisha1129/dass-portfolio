/*
   Meme V 1
   by tonisha dass
   text + images
*/ 


var description = "me being the imposter yet arguing with the entire group being sus"

var amongusImage; 

function preload (){
  amongusImage = loadImage ("amongus.png");
}

function setup () {
	var canvas = createCanvas (640, 360);
	canvas.drawingContext.miterLimit = 2;
  imageMode(CENTER);
}

function draw() {
	background ("yellow")

/* image */
image (amongusImage, mouseX, mouseY,amongusImage.width / 4, amongusImage.height/ 4);



    textSize (30);
    fill (122, 87, 175)
    stroke (275);
    strokeWeight(5);
    textStyle("BOLD")
    textFont ("courier new");



    textAlign(CENTER, CENTER);
	text ("My Class Portfolio" , width / 2, height / 2 );


	var titleWidth = textWidth ("My Class Portfolio")

    textSize(16);
    noStroke();
	text(description, 320, height / 2 + 100);
  blendMode (BLEND);



}