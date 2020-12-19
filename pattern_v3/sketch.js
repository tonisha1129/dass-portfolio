/*
  nested loop
*/

function setup(){
	createCanvas(600, 360);
}

function draw (){
	background ('black');

	let w = 50;
	let h = 50;


	for (let x = 0; x <= width; x += w){ // column
		for (let y = 0; y <= height; y += h){ //rows
 	        square (x, y, w, h -30);

 	        circle (x + 10, y + 10, 10);
 	        circle (x + 40, y + 10, 10);
 	        circle (x + 10, y + 40, 10);
 	        circle (x + 40, y + 40, 10);

 	        triangle (x + 30, y + 10,  x + 20, y + 20,x + 30, y + 30);
 	        }
 	    }
	
}
