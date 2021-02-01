class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.BBwidth=200;    
		this.SBheight=100;   
		this.Bthick=20;		 
		this.angle=0;	     

		//creating bottom body(BB)
		this.BB=Bodies.rectangle(this.x, this.y, this.BBwidth, this.Bthick, {isStatic:true})

		//creating left wall(LW)
		this.LW=Bodies.rectangle(this.x-this.BBwidth/2, this.y-this.SBheight/2, this.Bthick, this.BBheight, {isStatic:true})
		
		//creating right wall(RW)
		this.RW=Bodies.rectangle(this.x+this.BBwidth/2, this.y-this.SBheight/2, this.Bthick, this.SBheight, {isStatic:true})

		World.add(world, this.BB)
		World.add(world, this.LW)
		World.add(world, this.RW);

	}
	display(){
			var posBottom=this.BB.position;
			var posLeft=this.LW.position;
			var posRight=this.RW.position;

			fill('green')
			rect(posLeft.x, posLeft.y, this.Bthick, this.SBheight);
		
			rect(posRight.x, posRight.y,this.Bthick, this.SBheight);
			
			rect(posBottom.x, posBottom.y,this.BBwidth, this.Bthick);
			
			
    }
}