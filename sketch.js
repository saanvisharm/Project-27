
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   B1 = new ball(300,400,50)
   B2 = new ball(340,400,50)
   B3 = new ball(380,400,50)
   B4 = new ball(420,400,50)
   B5 = new ball(460,400,50)
   hanger = new Ground(380,200,200,20)
   rope1 = new rope(B1.body,hanger.body,-100,0) 
   rope2 = new rope(B2.body,hanger.body,-50,0) 
   rope3 = new rope(B3.body,hanger.body, 0,0) 
   rope4 = new rope(B4.body,hanger.body, 50,0) 
   rope5 = new rope(B5.body,hanger.body, 100,0) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  B1.display()
  B2.display()
  B3.display()
  B4.display()
  B5.display()
  hanger.display()
  line(B1.body.position.x, B1.body.position.y,hanger.body.position.x-100, hanger.body.position.y)
  line(B2.body.position.x, B2.body.position.y,hanger.body.position.x-50, hanger.body.position.y)
  line(B3.body.position.x, B3.body.position.y,hanger.body.position.x-0, hanger.body.position.y)
  line(B4.body.position.x, B4.body.position.y,hanger.body.position.x+50, hanger.body.position.y)
  line(B5.body.position.x, B5.body.position.y,hanger.body.position.x+100, hanger.body.position.y)

  drawSprites();
 
}
function keyPressed()
     { 
    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(B1.body,B1.body.positon,{x:-150.5,y:5}) 
  World.add(world, B1); } } 



