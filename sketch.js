const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
// create ground objects
var groundObj,leftSide,rightSide;
var world;
var radius = 40;


// function preload()
// {
	
// }

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);   // added
	
	
	engine = Engine.create();  // shifted here
	 world = engine.world;
  var ball_options={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
}
	// engine = Engine.create();
	// world = engine.world;

	//Create the Bodies Here. 

	// added for your understanding
	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  ellipse(ball.position.x,ball.position.y,radius,radius); // added
  //groundObj.display();
//   groundObj=new ground(width/2, 670, width, 20);
//   leftSide= new ground(1100, 600, 20, 120);
 // drawSprites();
 groundObj.display();
  leftSide.display();  
  rightSide.display();
}

// //  in index.html  Ground. js included

function keyPressed(){
	if (keyCode === UP_ARROW){
		//Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.03});
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); // added

	}
}



