var bullet, wall;

var speed, weight, thickness;

function setup() 
{
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet=createSprite(50, 200, 100, 15);
  bullet.shapeColor = "black";

  wall=createSprite(1500, 200, thickness, height/2);

  bullet.velocityX = speed;
}

function draw() 
{
  background("skyblue");  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage < 10)
    {
      wall.shapeColor = "green";
    }

    if(damage > 10)
    {
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }

  return false;
}