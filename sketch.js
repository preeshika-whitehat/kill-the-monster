const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 600, 10);
  hero = new Hero(400,3,100,200);
  monster = new Monster(300,200,100,100);
  //rope = new Rope(hero.body, { x: 500, y: 50 });
  box1 = new Box(280,350,40,40);
  box2 = new Box(310,350,40,40);
  box3 = new Box(340,350,40,40);
  box4 = new Box(370,350,40,40);
  box5 = new Box(400,350,40,40);
  box6 = new Box(430,350,40,40);
  box7 = new Box(460,350,40,40);
  box8 = new Box(490,350,40,40);
  box9 = new Box(315,320,40,40);
  box10 = new Box(345, 320,40,40);
  box11= new Box(370,320,40,40);
  box12= new Box(400,320,40,40);
  box13= new Box(430,320,40,40);
  box14 = new Box(460,320,40,40);  

  Engine.run(engine);

}

function draw() {
  background(bg);
  Engine.update(engine);
  attach = new Ground(200,400,600,5);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  hero.display();
  monster.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY});
}

function mouseReleased() {
attach.fly();
}

