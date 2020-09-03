var wall,thickness;
var bullet,speed,weight;
var deformation;

function setup() {
  speed = random(55,90);
  weight = random(400,1500);
  height = 400;
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = ("white")
  bullet.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80)
}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    deformation = (0.5 * weight * speed* speed)/22509;
    
    if(deformation>180) {
      bullet.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100)  {
      bullet.shapeColor = (230,230,0);
    }

    if(deformation>100) {
      bullet.shapeColor = (0,255,0);
    }
  } 
  drawSprites();
}