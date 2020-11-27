class Tree{
 constructor(x,y){
     var option={
        isStatic:true
     }
     this.body=Bodies.rectangle(this.x, this.y,option);
     this.image = loadImage("PIC/tree.png"); 
     this.x=x;
     this.y=y;
     this.width = 100;
     this.hight = 400;
     World.add(world, this.body);
 }
display(){
    rectMode(CENTER);
    image(this.image,700,0,600,650);
}
}
