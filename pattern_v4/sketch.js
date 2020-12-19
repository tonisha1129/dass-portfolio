/*
  generativ4e pattern
*/

function setup(){
	createCanvas(600, 360);
	pattern ();
}

function mousePressed (){
	pattern();
}
function pattern (){
	background ('black');

	let w = 50;
	let h = 50;


	for (let x = 0; x <= width; x += w){ // column
		for (let y = 0; y <= height; y += h){ //rows
			fill (205, 237, 234);
			stroke (19, 125, 36);
			strokeWeight (10);
 	        square (x, y, w, h -30);


 	        let r = random (224);
 	        let g = random (0);
 	        let b = random (0);
 	        stroke(r, g, b)
 	        strokeWeight (12);
 	        fill (r, g, b);
            
            fill  (0, 0, 200)
 	        circle (x + random(-10, 10), y + 10, 10);
 	        circle (x + 40, y + random (-10, 10), 10);
 	        circle (x + random (-10,10), y + 40, 10);
 	        circle (x + random(-4,10), y + 40, 10);

 	        
 	        }
 	    }
	
}
