//Create variables here
var pet;


function setup() {
	
  database=firebase.database();
 
  createCanvas(1200,800);
  pet = createSprite(250,400,20,30);







}


function draw() {  
  
  drawSprites();
  //add styles here

}
function preload()
{
  pet =loadImage("dogImg.png");
 
  //load images here
}


