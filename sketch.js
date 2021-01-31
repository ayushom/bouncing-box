
var music;
var box;
var block1, block2, block3, block4;
var border1,border2,border3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
     createCanvas(800,600);
    
    block1 = createSprite(100,570,200,60);
    block1.shapeColor="red";

    block2 = createSprite(300,570,200,60);
    block2.shapeColor= "blue";

    block3 = createSprite(500,570,200,60);
    block3.shapeColor="teal";

    block4 = createSprite(700,570,200,60);
    block4.shapeColor="orange";

    border1 = createSprite(400,0,800,15)
    border2 = createSprite(0,140,15,800)
    border3 = createSprite(800,140,15,800)
    

    box = createSprite(random(20,750),100,75,75);
    box.shapeColor="black"
    box.velocityX = 5;
    box.velocityY = 5;
   

}

function draw() {
    background("white");
    //create edgeSprite

    if(block1.isTouching(box)){
        box.shapeColor="red"
        box.velocityX=0
        box.velocityY=0
        music.stop();
    }

    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor = "blue"
        music.play();
    }

    if(block3.isTouching(box)&& box.bounceOff(block3)){
        box.shapeColor = "teal"
        
    }

    if(block4.isTouching(box)&& box.bounceOff(block4)){
        box.shapeColor = "orange"
        
    }
    

      box.bounceOff(border1);
      box.bounceOff(border2);
      box.bounceOff(border3);
      box.bounceOff(block2);
      box.bounceOff(block3);
      box.bounceOff(block4);
     
    
  
       drawSprites();
}
