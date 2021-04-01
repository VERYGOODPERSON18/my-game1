var PLAY= 1;
var END= 0;
var gameState=PLAY;
var score;

var engine, world;
var samurai1,samurai2;
var ninja1,ninja2;
var ground;

function preload(){
    //groundimg=loadImage("");
    ninjaImage=loadAnimation("ninja1.png","ninja2.png","ninja3.png","ninja4.png","ninja5.png","ninja6.png");
    theifImage=loadAnimation("theifrun1.png","theifrun2.png","theifrun3.png","theifrun4.png","theifrun5.png","theifrun6.png");
}

function setup(){
    var canvas = createCanvas(1600,800);
 
    //the creation of ground
    ground=createSprite(800,780,1600,20);

    //creating ninja
    ninja = createSprite(80,740,20,60);
    ninja.addAnimation("jump",ninjaImage);
    
   
  score = 0
}

function draw(){
    background("brown");

    text("Score: "+ score, 500,50);
    

    if (gameState===PLAY){
        score = score + Math.round(getFrameRate()/60);
    
        if(keyDown("space")){
            ninja.velocityY=-5;
            
        }
        ninja.velocityY=ninja.velocityY+0.8;
    
        
        
        
    
        ninja.collide(ground);
        spawnObstacles();
    }
        
  if (samurai1.isTouching(ninja)){
      gameState = END;
  }    

if (gameState = END){
    ninja.velocityY=0;
    samurai1.velocityX=0;
}






   
    drawSprites();
   
   
}

    function spawnObstacles() {
        if(frameCount % 150 === 0) {
          var samurai1 = createSprite(1600,40,10,40);
          samurai1.addAnimation("jump2",theifImage)
          samurai1.y = Math.round(random(50,750));
          samurai1.scale = 1;
          samurai1.lifetime = 300;
          samurai1.velocityX=-5;
        }
    }


