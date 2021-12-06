var sea,ship;
var seaImg1,shipImg;

function preload(){

  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  
  
  seaImg1 = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sea = createSprite(400,200);
  sea.addImage(seaImg1);
  sea.velocityX = -5;
  sea.scale=0.3;


  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  // Descomente o código para redefinir o fundo
  if(sea.x < 0){
   
    sea.x = sea.width/8;
  }

 
  drawSprites();
}