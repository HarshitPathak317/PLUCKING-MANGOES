
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,ground,boy,stone;
//var mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{
 boy = loadImage('PIC/boy.png')
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1000,700);
	ground = new Ground(700,650,1500,40);
	//boy = new Boy(100,420);
    stone = new Stone(100,78,60);
	//mango obj
	mango1 = new Mango(720,220,30);
	mango2 = new Mango(940,100,38);
	mango3 = new Mango(915,300,20);
	mango4 = new Mango(1150,280,35);
	mango5 = new Mango(1200,180,30);
	mango6 = new Mango(1000,250,29);
	
	launcherObject=new launcher(stone.body,{x:235,y:420})


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
    background('white');
	textSize(25);
	text("Press Space to get a second Chance to Play!!",50 ,50);
	image(boy ,200,340,200,300);

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	//Bodies Display
 
	tree.display();
	stone.display();
	ground.display();
	launcherObject.display();


   detectCollision(stone ,mango1);
   detectCollision(stone, mango2);
   detectCollision(stone, mango3);
   detectCollision(stone ,mango4);
   detectCollision(stone, mango5);


   drawSprites();
   
  }

  function detectCollision (lstone, lMango){
	MangoBodyPosition =  lMango.body.position;
	   stoneBodyPosition = lstone.body.position;
	   var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y ,MangoBodyPosition.x ,MangoBodyPosition.y);
	   if(distance<= lMango.r+lstone.r);
	   {
		 Matter.Body.setStatic( lMango.body,false);
	   }
	  }

	  function mouseDragged()
	  {
		  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
	  }
	  
	  function mouseReleased()
	  {
		  launcherObject.fly();
		
	  }
	  
	  function keyPressed() {
		  if (keyCode === 32) {
		  Matter.Body.setPosition(stone.body, {x:235, y:420}) 
			launcherObject.attach(stone.body);
		  }
		}