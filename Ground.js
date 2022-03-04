class Ground 
{
  constructor(x, y, w, h)
  {
    let options = {  
    isStatic: true
    }   // ; was added
   // re arranged 
    this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
    this.body = Bodies.rectangle(x, y, w, h, options);
    // this.w = w;
    // this.h = h;
    World.add(world, this.body);
}

//method or a function....dont need to mention function...no need to write function
// display()
//     var pos = this.body.position;
//     translate(groundPos.x, groundPos.y); 
//     push();
//     rectMode(CENTER);
//     stroke(255);
//     fill(127);
//     rect(0, 0, this.w, this.h);
//     pop();
display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}
}
