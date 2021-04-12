var canvas;
var music,blue,red,green,yellow,box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(100,580,120,20)
    blue.shapeColor="blue"
    red = createSprite(300,580,120,20)
    red.shapeColor="red"
    green = createSprite(500,580,120,20)
    green.shapeColor="green"
    yellow = createSprite(700,580,120,20)
    yellow.shapeColor="yellow"

   
   

    //create box sprite and give velocity
    box = createSprite(random(20,750),420,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=3;
   }

function draw() {
    background(rgb(169,169,169));
    

    //create edgeSprite
        edges=createEdgeSprites();
        box.bounceOff(edges); 
      
         
   


    //add condition to check if box touching surface and make it box
    if (red.isTouching(box) && box.bounceOff(red)){
        box.shapeColor="yellow";
        music.play()
        }
        if (yellow.isTouching(box) && box.bounceOff(yellow)){
            box.shapeColor="red";
            }
            if (blue.isTouching(box) && box.bounceOff(blue)){
                box.shapeColor="green";
                }
                if (green.isTouching(box) && box.bounceOff(green)){
                    box.shapeColor="blue";
                    }
       // box.bounceOff(blue);   
        //box.bounceOff(red);   
       // box.bounceOff(green);   
       // box.bounceOff(yellow);
    drawSprites();   
    
    
   
   
}
