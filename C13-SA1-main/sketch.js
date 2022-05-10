var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png","girl6.png","girl7.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("pixelforest.jpg");
cloudImage=loadImage("obstacle1.png")
 
  
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  
  
  //create a ground sprite
  ground = createSprite(100,50,1000,100);
  ground.addImage(groundImage)
  ground.x = ground.width /2;
  //ground.velocityX = -4;
  ground.scale=0.98
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  //creating invisible ground
  invisibleGround = createSprite(300,190,600,10);
  invisibleGround.visible = true;
  invisibleGround.velocityX=-2
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  if(keyDown("right")){
  trex.x=trex.x+2
  }
  camera.position.x=trex.position.x
  spawnClouds()
    
 if(invisibleGround.x>300){
  invisibleGround.x=invisibleGround.width/4
 }
 
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
if (frameCount%100 === 0){ cloud=createSprite(600,100,40,10);
//cloud.velocityX=-2
cloud.scale=0.2
  cloud.addImage(cloudImage)
}


}



