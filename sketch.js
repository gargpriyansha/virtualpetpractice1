//Create variables here
var pet;

var score = 0; 


function preload()
{
  pet =loadImage("dogImg.png");
 
  //load images here
}

function setup() {
	
  database=firebase.database();
 
  createCanvas(1200,800);
  pet = createSprite(250,400,20,30);

}


function draw() {  
  
if(mousePressedOver(pet)){
   score = score+1; 
}
	drawSprites();
  //add styles here

}


