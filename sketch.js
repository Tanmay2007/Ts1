const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grd1,grd2,b1,b2,b3,b4,b5,b6,b7,b8,b9;


function preload(){


}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    grd1=new Ground(600,395,1300,50)
    grd2=new Ground(370,245,200,20)

    b1=new Box(330,235,30,40)
    b2=new Box(360,235,30,40)
    b3=new Box(390,235,30,40)
    b4=new Box(420,235,30,40)
    b5=new Box(450,235,30,40)
   
    b6=new Box(360,195,30,40)
    b7=new Box(390,195,30,40)
    b8=new Box(420,195,30,40)

    b9=new Box(390,155,30,40)
    
}

function draw(){
    
    Engine.update(engine);
    grd1.display();
    grd2.display();

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
}