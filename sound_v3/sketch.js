/*
   interaction 2 - collisions
*/

var r, g, b;
var dubSound;

function preload (){
	dubSound = loadSound ('dub.mp3');
	beatSound = loadSound ('beat.mp3')
}

function setup (){
	createCanvas (640, 360);
	r = random (255);
	g = random (255);
	b = random (255);
}

function mousePressed () {
	// click circle
	var d = dist (100, 100, mouseX, mouseY);
	if (d < 50){
		// change the background color
		r = random (255);
	    g = random (255);
	    b = random (255);
	    dubSound.play();

	}

	// click rectangle 
	if (mouseX > 400 && mouseX < 500 && mouseY > 100 && mouseY < 150) {
		dubSound.play();
	}
}

function draw (){
	background ('black');

    // circle button 
	fill ('orange');
    var d = dist(100, 100, mouseX, mouseY);
    if (d < 50) {
    	fill ("purple");
    	
    }
    circle (100, 100, 100);
	

	// rect button
	fill ("blue");
	if (mouseX > 400 && mouseX < 500 && mouseY > 100 && mouseY > 150) {
		fill ('salmon');
	}

	rect (400, 100, 100, 50);

}

