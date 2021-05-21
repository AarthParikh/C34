class Rope{
    constructor(bodyA, pointB){
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 1.2,
                length: 250
            }
            this.pointB = pointB
            this.sling = Constraint.create(options);
            World.add(world, this.sling);
        }
        attach(body){
            this.sling.bodyA = body;
        }
        
        fly(){
            this.sling.bodyA = null;
        }    
    
        
     

    display(){
        
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke("red")
            fill("red")
            line(pointB.x,pointB.y,pointA.x,pointA.y);       }
    
    
}