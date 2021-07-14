var sprite;
function setup() {
  createCanvas(400,400);
  sprite=createSprite(200,200,20,20)
}

function draw() 
{
  
  background(30);
  if (keyDown("LEFT_ARROW")) {
    sprite.x-=2
  }
  if (keyDown("RIGHT_ARROW")) {
    sprite.x+=2
  }
  if (keyDown("UP")) {
    sprite.y-=2
  }
  if (keyDown("DOWN")) {
    sprite.y+=2
  }
  if (keyDown("R")) {
    background("red")
  }
  if (keyDown("G")) {
    background("green")
  }
  if (keyDown("B")) {
    background("blue")
  }
  if (keyDown("Y")) {
    background("yellow")
  }
  drawSprites()
  
}




