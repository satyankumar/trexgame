
var trex ,trex_running;
function preload(){
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 
 ground=createSprite(200,180,400,20)
 ground add Image(ground,groundImage)
 groundimage=loadimage
}

function draw(){
  background("lightgrey")
  drawSprites()

}
