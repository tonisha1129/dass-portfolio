/*
final project
title 
description
theme
interaction
graphics
*/

var currentSlide = 1;
var totalSlides = 5;

var nextBtnX = 960 - 120;
var nextBtnY = 640 - 40;

var btnW = 100;
var btnH = 25;

var backBtnX = 20;
var backBtnY = nextBtnY;



function setup(){
	createCanvas (960, 640);
}

function draw (){
	background ("black")
	noStroke();
	//slides
	if (currentSlide == 1) {
		// title
		textSize (100);
		fill (255);
		textAlign (CENTER, CENTER);
		text ('Maze Runner', width/2, height/2 + 40);

	} else if (currentSlide == 2) {
		fill ('white');
		textAlign (LEFT);
		textSize (40);
		text ('The project is based on generative patterns using p5 shapes and randomness with the interactive method of using mousePressed', 50, 100, width - 100);

	}else if (currentSlide == 3){
		textAlign (LEFT);
		textSize (40);
		text ('The user will gnerate new patterns and sounds by clicking on the canvas', 50, 100, width - 100);

	}else if (currentSlide == 4){
		textAlign (LEFT);
		textSize (40);
		text ('The graphics include lines, squares', 50, 100, width - 100);

        fill ('lightpink');
		square (width/2, height/2, 100);

        stroke ("blue");
		line(200, 300, 300, 300);
	}

	//draw Button 
	if (currentSlide < totalSlides) {
		button (nextBtnX, nextBtnY, 'Next');
	}
	

	if (currentSlide > 1) {
		button (backBtnX, backBtnY, 'Back');
	}
	
}

function button (x, y, displayText){




	// draw buttons
       stroke ('yellow');

	if (mouseX > x && mouseX < x + btnW && 
		mouseY > y && mouseY < y + btnH) {
        fill('red');

        if (mouseIsPressed) {
        	stroke ('red');
        }
	}

 
    strokeWeight (4);
    fill (18, 154, 115);
	rect (x, y, btnW, btnH, 10);


    noStroke();
    fill('white');
    textSize(20);
    textAlign (CENTER, CENTER);
	text (displayText, x, y, btnW, btnH);
}


function mousePressed (){
	//over next button
	if (mouseX > nextBtnX && mouseX < nextBtnX + btnW && 
		mouseY > nextBtnY && mouseY < nextBtnY + btnH) {

		if (currentSlide < totalSlides){
			currentSlide ++;
		}

    }
    if (mouseX > backBtnX && mouseX < backBtnX + btnW && 
		mouseY > backBtnY && mouseY < backBtnY + btnH) {
    	if (currentSlide > 1 ){
    		currentSlide --;
    	}		
    	
    }
}

    

