class launcher{
constructor(bodyA, pointB){
    var options={
bodyA: bodyA,
pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly(){
        this.launcher.bodyA = null;
    }

    Launcher(bodyA){
        this.launcher.bodyA=bodyA;
    }

    display(){
        if(this.launcher.bodyA){
        var pointA=this.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}

    
}