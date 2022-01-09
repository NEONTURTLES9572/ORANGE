var littlesquare;

function setup() {
  createCanvas(400,400);
 littlesquare = createSprite (230,200,30,30)


}

function draw() 
{
  background(30);
drawSprites()
if(keyDown(LEFT_ARROW))

{
  littlesquare.x = littlesquare.x - 10
  
}
if(keyDown(RIGHT_ARROW))
{
 littlesquare.x = littlesquare.x + 10 
}
if(keyDown(UP_ARROW))
{
  littlesquare.y = littlesquare.y - 10
}
if(keyDown(DOWN_ARROW))
{
  littlesquare.y = littlesquare.y + 10
}

}




