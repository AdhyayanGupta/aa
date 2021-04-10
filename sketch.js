var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1000, 400);
	rectMode(CENTER);
	

	

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 380, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	ground.shapeColor = color(255);
 	World.add(world, ground);
      

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 rect(ground.position.x,ground.position.y,width,10)
 // 
  drawSprites();
 // 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//Matter.Body.setStatic(packageBody,false);

	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityY = 5;
	
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  createEdgeSprites();
  packageSprite.collide(groundSprite);


	packageBody = Bodies.circle(width/2 , 100 , 5 , {restitution:0.4,isStatic:false});
	World.add(world, packageBody);
    
  }
}



