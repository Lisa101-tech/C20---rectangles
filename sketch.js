var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 200, 70, 150);
  fixedRect.shapeColor = "blue"
 fixedRect.debug = true
  
 movingRect = createSprite(480,200,150,70)
  movingRect.shapeColor = "red"
  movingRect.debug = true

  }

function draw() {
  background ("black"); 
 console.log (movingRect.x-fixedRect.x)
 console.log(fixedRect.width/2+movingRect.width/2)
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 ){
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "yellow"
  }else{
  fixedRect.shapeColor = "blue"
   movingRect.shapeColor = "red"
  }
  drawSprites();
}