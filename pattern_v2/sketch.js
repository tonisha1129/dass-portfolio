/*
pattern version 2
generative pattern 
uaing random
*/

function setup (){
	createCanvas (640, 360);
	pattern();
}

function mousePressed (){
	pattern ();
}

function pattern (){
	background(237, 187, 153);

	
		fill ("black");
		stroke (300);
		line (100, 50, 200, 50);
		line (150, 0, 150, 150);
		line (300, 50, 400, 50);
		line (350, 0, 350, 150);
		line (500, 50, 600, 50);
		line (550, 0, 550, 150);


    for (let x = random (-200, 50); x < width; x += random (20, 100)){

    	let r = random (30, 100);
    	let g = random (120, 200);
    	let b = random (20, 210);
    	fill (r, g, b);
    	noStroke();
		let y = random (0, 60);
		let h = random (100, 300);
		let w = random (200, 300);

		triangle (x, height, x + w/2, y, x + w, height);
}
for (let x = random (-200, 50); x < width; x += random (20, 100)){

    	let r = random (232, 20);
    	let g = random (224, 32);
    	let b = random (219, 100);
    	fill (r, g, b);
    	let w = random (50, 100);
		circle (x, height - 80, w);

}
    for (let x = random (-200, 50); x < width; x += random (20, 100)){

    	let r = random (157, 3);
    	let g = random (29, 156);
    	let b = random (3, 156);
    	fill (r, g, b);
    	let h = random (10, 70);
        ellipse (x, height -150, h);

		fill (190, 167,0);
		ellipse (x, height -140, 10);

        fill ('black');
		rect (x, height - 100, 30, 10);


}
for (let x = random (-50, 100); x < width; x += random (20, 100)){
		let y = random (0, 50);

        fill (213, 236, 247);
        noStroke ();
		arc(x, y, 80, 80, -5, PI + QUARTER_PI, CHORD);


	}

}

   

		
		

