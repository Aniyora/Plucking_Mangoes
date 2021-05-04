class ground
{
	constructor()
	{
		var options={
			isStatic:true,	
			friction:0.4	
			}
		this.body=Bodies.rectangle(400,600,1100,15, options);
 		World.add(world, this.body);

	}
	
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(128,128,128)
			rect(400,600,1100,15);
			pop()
			
	}

}