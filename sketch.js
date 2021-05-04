const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	treeObj=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,100,30);
	mango3=new mango(980,50,30);
	mango4=new mango(1000,100,20);
	mango5=new mango(1200,100,30);

  treeObj=new tree(1050,580);
  
  stoneObj=new stone(235,420,30);
 	
  groundObject=new ground(width/2,600,width,20);
  
  launcherObject=new launcher(stoneObj.body,{x:100,y:465});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

  
  image(boy, 200, 340, 200, 300);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  groundObject.display();
  stoneObj.display();
  launcherObject.display();
}

function mouseReleased(){
	launcherObject.fly();
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function detectCollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,  mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r){
  Matter.Body.setStatic(Lmango.body,false);
  }
      
}

function keyPressed(){
  if(keyCode===32){
    launcherObject.attach(stoneObj.body);
  }
}
