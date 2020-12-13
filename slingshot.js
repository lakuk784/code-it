class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        this.bodyA=bodyA;
        World.add(world, this.sling);

    }
    
    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight (4)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            
}