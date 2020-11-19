/*
meme v2
conditional logic 
*/

var amonguImage, pinkpantherImage, cryImage;

function preload() {
	amonguImage = loadImage ("amongu.png");
	pinkpantherImage = loadImage ('pinkpanther.png');
	cryImage = loadImage ("cry.jpg");
}

function setup(){
	createCanvas (600, 600);
	textAlign (CENTER, CENTER);
	textFont ("verdana, monospace");
	textSize (75);

}

function draw (){
	background (0);

	var w = width / 2; // half the width
	var h = height / 2;  // half the height

	//image in each quadrant
	image (amonguImage, 0, 0, w, h);
	image (pinkpantherImage, w, 0, w, h);
	image (amonguImage, 0, h, w, h);
	image (cryImage, w, h, w, h);

	if (mouseIsPressed){
		// top - left quadrant
		if (mouseX < w && mouseY < h){
			fill (11, 174, 58);
			textSize (25);
			text ("mom: on the phone", width / 2, height / 2);
		} 
        // top - right quadrant
		else if (mouseX > w && mouseY < h){
			textSize(20);
			fill (169, 174, 11);
			text ("me: waiting patiently with the perfect excuse to go out", width / 2 , height / 2);

		}
		// bottom- left quadrant
		else if (mouseX < w && mouseY > h){
			textSize (15);
			fill ("brown");
			text ("mom: Go do them dishes NOW!", w / 2, h / 2 + h);
		}
		// bottom - right quadrant
		else if (mouseX > w && mouseY > h){
			fill (188, 18, 113);
			textSize(15);
		    text ("me: Dramatic Crocodile Tears", w / 2 + w, h / 2 + h );
		}
	}

	}

//if (mouseIsPressed) {
	//image (amonguImage, 0, 200);
	//fill (256);
	//text ("Also me: Convincing That One Jack That He Is The Sus For Coming After Me", width / 2, height / 2);
//}else{
	//image (pinkpantherImage, -150, 100);
	//text ("Me: thinking of the perfect lie to tell my friends", width / 2, height / 2);


