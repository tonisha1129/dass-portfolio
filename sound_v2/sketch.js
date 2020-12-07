/*
   sound sampler v2
*/

var reggaeSound;
var beatSound;
var dubSound;
var aImage;

function preload (){
	reggaeSound = loadSound ('reggae.mp3');
	beatSound = loadSound ('beat.mp3');
	dubSound = loadSound ('dub.mp3');
	aImage = loadImage ('a.png');

}

function setup (){
	createCanvas (640, 360);
}

function draw (){
	background ('black');

	if (reggaeSound.isPlaying()) {
		background ('pink');
		fill (0, 200,0, 148);
		triangle (random(width), random(height), random(width), random(height), random (200), random (300));
	} 
	if (beatSound.isPlaying()) {
		fill (20, 0,300, 120);
		quad (random(width), random(height), random(width), random(height), random (width), random (height), random (width), random (height));
	} 
	if (dubSound.isPlaying()) {
		image (aImage, random (width), random (height), 10);
	} 
}

function keyPressed (){
	if (keyCode == 13) { //enter key
		reggaeSound.play()
	}
	if (keyCode == 65) { //a key
		beatSound.play()
    }
    if (keyCode == 66) { //b key
		dubSound.play()
}




	
}

