/*
pattern version 1
javascript loop
*/

function setup (){
	createCanvas (640, 360);
}

function draw (){
	background("black");

	for (let x = 50; x < width; x += 40) {
		fill (3, 182, 168);
		rect (x, height - 100, 10, 200);
		

        fill (166, 0, 81);
		circle (x, height - 80, 80);

		ellipse (x, height -150, 50);

        let r = map (x, 0, width, 0, 255);
		fill (177, r, 202);
		square (x, height - 110, 60);

		fill (190, 167,0);
		ellipse (x, height -157, 10);


		fill (224, 247, 213);
		square (x, height - 80, 30, 10);


        fill (213, 236, 247);
		arc(50, 50, 80, 80, -5, PI + QUARTER_PI, CHORD);
		
		fill ("white");
		stroke (300);
		line (100, 50, 200, 50);
		line (150, 0, 150, 150);
		line (300, 50, 400, 50);
		line (350, 0, 350, 150);
		line (500, 50, 600, 50);
		line (550, 0, 550, 150);


	}
}

