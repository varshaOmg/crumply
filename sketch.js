const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(700,700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbinObj = new dustbin(600,600);

	paperObject = new paper(100,100);
	groundObject=new ground(670,670);

	

	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:y});
    
  	}
}





