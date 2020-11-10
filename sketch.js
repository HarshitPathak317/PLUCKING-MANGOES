
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,boy,stone;
var mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{

}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500,500);
	ground = new Ground(700,650,1500,40);
	boy = new Boy(100,420);
    stone = new Stone(100,78);
	//mango obj
	mango1 = new Mango(720,220,30);
	mango2 = new Mango(940,100,38);
	mango3 = new Mango(915,300,20);
	mango4 = new Mango(1150,280,35);
	mango5 = new Mango(1200,180,30);
	mango6 = new Mango(1000,250,29);
   
    function detectCollision (lstone,lmango){
	 mangoBodyPosition = lmango.body.position;
	 stoneBodyPosition = lstone.body.position;
	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	 if(distance<=lmango+r+lstone.r);
	 {
       Matter.body.isStatic(lmango.body,false);
	 }
	}


	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
    background('white');


   detectCollision(stone,mango1);
   detectCollision(stone,mango2);
   detectCollision(stone,mango3);
   detectCollision(stone,mango4);
   detectCollision(stone,mango5);


   boy.display();
   stone.display();
   ground.display();
   tree.display();

   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   drawSprites();
   
  }



