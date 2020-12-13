
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var ground;
var line1,line2,line3,line4,line5

function preload()
{
	
}

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground = createSprite(330,100,350,20)

  //ball
    ball1 = new ball (200,400,50)
    ball2 = new ball (250,400,50)
    ball3 = new ball (300,400,50)
    ball4 = new ball (350,400,50)
    ball5 = new ball (400,400,50)

  //constraint
  line1 = new slingshot(ball1.body,{x:200,y:100})
  line2 = new slingshot(ball2.body,{x:250,y:100})
  line3 = new slingshot(ball3.body,{x:300,y:100})
  line4 = new slingshot(ball4.body,{x:350,y:100})
  line5 = new slingshot(ball5.body,{x:400,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
  
  drawSprites();
 
}

function keyPressed ()
{
  if (keyCode === 38)
  {
    ball1.force()
  }
}


