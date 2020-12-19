/*
   generative patterns,
   mouse interaction sound sampler
*/


var dub
var beat
var acoustic

function preload(){
	dub = loadSound ('dub.mp3');
	beat = loadSound ('beat.mp3');
	acoustic = loadSound ('acoustic.mp3');
	

}

function setup(){
	createCanvas(640, 360);
	pattern ();
}
function pattern (){

}

function mousePressed (){
button (100, 100, 100, dub);
button (350, 100, 100, beat);
button (250, 200, 100, acoustic);


}

function button (x, y, s, sound) {

	var d = dist (x, y, mouseX, mouseY);
	// calculate distance
	if (d < s/2){
		//inside the button
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



function pattern (){
	background ('black');


	let w = 50;
	let h = 50;


	for (let x = 0; x <= width; x += w){ // column
		for (let y = 0; y <= height; y += h){ //rows
			
			noFill();
			stroke(198, 249, 72);
            strokeWeight(10);

            let r = random (3);
            if (r < 1){
            	line(x, y, x + w, y + h);
            }else if ( r < 2){
            	line (x + w, y, x, y + h);
            }else{
            	stroke (249, 90, 72);
            	strokeWeight (5);
            	circle (x , y, h);
            }

 	        
 	        }
 	    }
	
}




