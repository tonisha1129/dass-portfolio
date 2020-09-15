/* 
   self portrait v1
   by tonisha dass
*/

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background ('yellow');


   //face
   noStroke();
   fill(166,11,53); //red
   quad(150,50,450,40,530,350,150,330);
   

   //eyes
   fill(138,194,10); //green
   triangle(200,150, 300, 150, 250, 200); //left
   fill(16,172,155); //blue
   circle(400,150,100) //right

    //nose
    fill(139,114,201); //mauve
    square(300,200,50) 


    // mouth
    fill(208,9,90); //pink
    stroke(17,13,245); //purple
	rect(250, 270, 150, 20, 10);

    //hair
    stroke(81,183,186); //blue
    strokeWeight(7);
    line(200,50,200,140);
    line(210,50,210,140);
    line(220,50,220,140);
    line(230,50,230,140);
    line(240,50,240,140);
    line(250,50,250,140);
    line(260,50,260,140);
    line(270,50,270,140);
    line(280,50,280,140);
    line(290,50,290,140);
    line(300,50,310,140);
    line(310,50,320,140);
    line(320,50,330,140);
    line(330,50,340,140);
    line(340,50,350,140);
    line(350,50,360,130);
    line(360,50,370,120);
    line(370,50,380,110);
    line(380,50,390,100);
    line(390,50,400,100);
    line(400,50,410,100);
    line(410,50,420,100);

     
}