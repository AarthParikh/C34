const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ground;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,600,1200,20)
   box1 = new Box(600,100,70,70)
   box2 = new Box(600,100,70,70)
   ball = new Ball(200,200,80,80)
   rope = new Rope(ball.body,{x:500,y:50})
}

function draw(){
    
 background(0);
  Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   ball.display();
   rope.display();
}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}




