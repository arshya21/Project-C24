class Dustbin{
constructor(x,y){
	this.boxPosition=width/2-100
	this.x=x
	this.y=y
	this.DustbinWidth=200
	this.dustbinHeight=100
	this.wallThickness=20
	this.angle=0
	
	this.bottomWallBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
	this.LeftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
	Matter.Body.setAngle(this.LeftWallBody,this.angle)
	this.RightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
	Matter.Body.setAngle(this.RightWallBody,this.angle)
	this.rightWallBody=Bodies.rectangle(this.boxPosition+20,this.Y,20,100,{isStatic:true})
	World.add(world,this.bottomWallBody)
	World.add(world,this.RightWallBody)
	World.add(world,this.LeftWallBody)
	}	
	display(){
		var posBottom =this.bottomWallBody.position;
		var posLeft =this.LeftWallBody.position;
		var posRight =this.RightWallbody.position;
		 
		push()
		translate(posLeft.x,posLeft.y)
		rectMode(CENTER);
		angleMode(RADIANSE)
		fill("yellow");
		stroke("yellow")
		rotate(this.angle)
		rect(0, 0, this.wallThickness, this.dustbinHeight);
		pop()

		push()
		translate(posRight.x,posRight.y)
		rectMode(CENTER);
		angleMode(RADIANSE)
		fill("yellow");
		stroke("yellow")
		rotate(-1*this.angle)
		rect(0, 0, this.wallThickness, this.dustbinHeight);
		pop()

		push()
		translate(posBottom.x,posBottom.y)
		rectMode(CENTER);
		angleMode(RADIANSE)
		fill("yellow");
		stroke("yellow")
		
		rect(0, 0, this.wallThickness, this.dustbinHeight);
		pop()
	  }
}
   