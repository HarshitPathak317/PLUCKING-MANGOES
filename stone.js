class Stone{
	constructor(x,y){
		var option={
		   isStatic:true
		}
		this.body=Bodies.rectangle(this.x, this.y,option);
		this.image = loadImage("PIC/STONE.png"); 
		this.x=x;
		this.y=y;
		this.width = 200;
		this.hight = 600;
		World.add(world, this.body);
	}
   display(){
	   rectMode(CENTER);
	   image(this.image,80,415,100,100);
   }
   }