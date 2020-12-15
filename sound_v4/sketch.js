/*
   custom functionhs
   mouse interaction sound sampler
*/

var dub
var beat
var acoustic
var reggae

function preload(){
	dub = loadSound ('dub.mp3');
	beat = loadSound ('beat.mp3');
	acoustic = loadSound ('acoustic.mp3');
	reggae = loadSound ('reggae.mp3')

}


function setup (){
	createCanvas (640, 360);
}

function draw (){
	background ('black');

button (100, 100, 100, dub);
button (350, 100, 100, beat);
button (250, 200, 100, acoustic);
button (500, 200, 100, reggae);

	}

function mousePressed() {

}

function button (x, y, s, sound) {

	var d = dist (x, y, mouseX, mouseY);
	// calculate distance
	if (d < s/2){
		//inside the botton
	   fill ('PaleVioletRed');

	   if (mouseIsPressed && !sound.isPlaying()) {
	   	sound.play();
	   }
 
	}else {
		 // outside the button
		fill (154, 203, 67);
}
triangle (x - 80, y - 50, x - 50, y + 100, x + 50, y + 100, s);


}