var Gb,Rb,Bb,Pb;
var RedB,GreenB,PinkB,BlueB,WoodBow,arrow;
var bimage
var bow
var arrowImage
var score;
var arrowGroup;
var rGroup,pGroup,bGroup,gGroup;


function preload(){
  Gb = loadImage("green_balloon0.png");
 Rb = loadImage("red_balloon0.png");
 Bb = loadImage("blue_balloon0.png"); 
 Pb = loadImage("pink_balloon0.png");
 bimage = loadImage("background0.png");
  bow = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
 
  
}

function setup() {
  createCanvas(600, 600);
   scene = createSprite(0,0)
  scene.addImage(bimage);
  scene.scale = 3;
  
  score = 0;
 
  
  
  WoodBow = createSprite(500,500,30,30);
  WoodBow.addImage("boow",bow); 
 
  
    rGroup = new Group();
    pGroup = new Group();
    bGroup = new Group();
    gGroup = new Group();
    arrowGroup = new Group();
   //for(i=50;i<550;i=i+70){
  //RedB = createSprite(50,i,10,10);
  //RedB.addImage("redballoon",Rb);
  //RedB.scale = 0.1;
  
 // }
  
  //for(i=100;i<500; i=i+70){
    //GreenB = createSprite(100,i,35,100);
  //GreenB.addImage("greenballoon",Gb);
  //GreenB.scale = 0.09;
 // }
  
  //for(i=150;i<400; i=i+70){
  //BlueB = createSprite(150,i,10,10);
  //BlueB.addImage("blueballoon",Bb);
  //BlueB.scale = 0.11;
//}  
  
 //for(i=200;i<300; i=i+70){
  //PinkB = createSprite(200,i,10,10);
  //PinkB.addImage("pinkballoon",Pb);
   //PinkB.scale = 1.2;
 //}
  
  
  
  
}

function draw() {
  if(keyDown("space")){
    arrows();
  } 
   WoodBow.y = mouseY;
  
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon);
  
  if (World.frameCount % 80==0){
    if(select_balloon==1){
      redBalloon();
    } else if (select_balloon ==2){
      greenBalloon();
    } else if (select_balloon ==3){
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if(arrowGroup.isTouching(rGroup)){
     rGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score +1;
    
  }
  
  
  if(arrowGroup.isTouching(gGroup)){
     gGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score +3;
    
  }
  
  
  if(arrowGroup.isTouching(bGroup)){
     bGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score +5;
    
  }
  
  
  if(arrowGroup.isTouching(pGroup)){
     pGroup.destroyEach();
     arrowGroup.destroyEach();
     score = score +7;
    
  }
  
                    
  //add code here
   drawSprites();
    text("Score:"+score,270,30);

  
}

function arrows(){
  arrow = createSprite(450,500,10,10);
  arrow.addImage("flyingArrows",arrowImage);
  arrow.velocityX = -5
  arrow.y = WoodBow.y;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)
}

function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  
  red.addImage("rballoons",Rb);
  red.velocityX = (3+score/10);
  red.lifetime = 170;
  red.scale = 0.1;
  rGroup.add(red)
}

function greenBalloon(){
  var green = createSprite(0,Math.round(random(250,250)),10,10);
  
  green.addImage("gballoons",Gb);
  green.velocityX = (4+score/12);
  green.lifetime = 170;
  green.scale = 0.09;
  gGroup.add(green);
}

function blueBalloon(){
  var blue = createSprite(0,Math.round(random(10,280)),10,10);
  
  blue.addImage("bballoons",Bb);
  blue.velocityX = (5+score/15);
  blue.lifetime = 170;
  blue.scale = 0.11;
  bGroup.add(blue);
}

function pinkBalloon(){
  var pink = createSprite(0,Math.round(random(400,100)),10,10);
  
  pink.addImage("pballoons",Pb);
  pink.velocityX = (7+score/21);
  pink.lifetime = 170;
  pink.scale = 1.2;
  pGroup.add(pink);
}

