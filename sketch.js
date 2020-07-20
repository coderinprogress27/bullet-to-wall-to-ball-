var bullet;
var wall;
var thickness;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  thickness=random(22,83)
  wall=createSprite(1500,200,60,1600);
  wall.shapeColor=color(80,80,80)
  bullet.shapeColor=color(255,255,255)
  speed=random(223,321);
bullet.velocityX=speed;
  weight=random(30,52);
}

function draw() {
  background(0,0,0);  

drawSprites();
}
function hasCollided(lbullet ,lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
return true;
}
return false;
if(hasCollided(bullet, wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

if (damage>10){
  wall.shapeColor=color(225,0,0)
}


if(damage<10){
wall.shapeColor=color(0,225,0)
}
}
}
