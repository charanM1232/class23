var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var redBox1, redBox2, redBox3;
var red
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redBox1 = createSprite(400,650,200,20);
	redBox1.shapeColor = "red";

	redBox2 = createSprite(300,620,20,100);
	redBox2.shapeColor = "red";

	redBox3 = createSprite(500,620,20,100);
	redBox3.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redSprite=createSprite(width/2, height-30, width,10);
	redSprite.visible = false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	 red = Bodies.rectangle(width/2, 630, width, 10 , {isStatic:true} );
	 World.add(world, red);
	 
	redBox1 = Bodies.rectangle(400, 650, 200, 20 , {isStatic:true} );
	World.add(world, redBox1);
	
	redBox2 = Bodies.rectangle(300, 620, 20, 100 , {isStatic:true} );
	World.add(world, redBox2);

	redBox3 = Bodies.rectangle(500, 620, 20, 100 , {isStatic:true} );
	World.add(world, redBox3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



