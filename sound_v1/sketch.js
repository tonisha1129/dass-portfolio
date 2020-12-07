/*
   sound sampler v 1
*/

var reggaeSound;

function preload (){
	reggaeSound = loadSound ('reggae.mp3');
}

function setup() {
	createCanvas (640, 360);
}

function draw(){
	background (255);

	//visual sound time

	var currentTime = reggaeSound.currentTime();
	var duration = reggaeSound.duration();
	var timeElapsed = map (currentTime, 0, duration, 0, width);

	fill ("green");
	noStroke();
	triangle (500, 150, timeElapsed, 100, timeElapsed, 200);

	// change volume
	var vol = map(mouseY, 0, height, 1, 0);
	reggaeSound.setVolume (vol);

	fill ('orange');
	square (360, mouseY, mouseY );
	fill('blue')
	triangle (340, mouseY, 200, 400, 550, 400);

	//pan left and right
	//var pan = map(mouseX, 0, width, -1, 1, true);
	//;;reggaeSound.pan(pan);

	var rate = map(mouseX, 0, width, 0.25, 3, true);
	reggaeSound.rate(rate);

	stroke ('purple');
	strokeWeight (5);
	line(mouseX, 0, mouseX, height);

}

function mousePressed () {
	if (reggaeSound.isPlaying()){
		reggaeSound.pause();
	} else {
	  reggaeSound.play();
	}
}
