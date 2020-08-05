
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var roof1,rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	bob1=new bob(270,380,25);
	bob2=new bob(320,380,25);
	bob3=new bob(370,380,25);
	bob4=new bob(420,380,25);
	bob5=new bob(470,380,25);
  roof1=new Roof(370,100,320,30);
  rope1 = new rope(bob1.body , {x:390 , y:100})

}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display()



  //drawSprites();
 
}



