class ball 
{
     constructor (x,y,r) 
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
    
            
            }
          
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world, this.body);

    }
    force ()
    {
     this.body.friction = 10
    }

  display()
        {
        
        var paperpos=this.body.position;
        push()		
        translate(0,0);
        ellipseMode(CENTER)
        strokeWeight(3);
        fill("#FF00FE")
        ellipse (this.x,this.y,this.r)
        pop()
        
        }
}