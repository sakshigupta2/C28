class Chain {
    constructor (bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.03,
            length:5
        }
        this.chain =Constraint.create(options);
        World.add (world, this.chain);
    }
   display(){
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;
       strokeWeight(5);
       stroke("white");
       line(pointA.x,pointA.y, pointB.x, pointB.y);
   }
}