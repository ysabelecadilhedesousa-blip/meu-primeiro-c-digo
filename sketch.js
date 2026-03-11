var box     
function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,30,30)
}

function draw() 
{
  background("yellow");
  if(keyIsDown(RIGHT_ARROW)){
    box.shapeColor=color("red")
  }
  if(keyIsDown(LEFT_ARROW)){
    box.shapeColor=color("green")
  }if(keyIsDown(UP_ARROW)){
    box.shapeColor=color("blue")
  }if(keyIsDown(DOWN_ARROW)){
    box.shapeColor=color("pink")
  }
drawSprites()
}




