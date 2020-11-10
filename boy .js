class Boy{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width = 30;
        this.hight = 250;
        this.image = loadImage("PIC/boy.png"); 
        this.body=Bodies.rectangle(this.x, this.y);
        World.add(world, this.body);
    }
   display(){
       rectMode(CENTER);
       image(this.image,110,420,200,300);
   }
   }