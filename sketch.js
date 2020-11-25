const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ball;
var ground;
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

engine=Engine.create();
world=engine.world;


var opt = {
  isStatic:true
}

ground = Bodies.rectangle(200,390,200,50,opt);
World.add(world,ground);
console.log(ground);
var ballOpt = {
  restitution:1.0
}
ball = Bodies.circle(200,100,40,ballOpt);
World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  drawSprites();
}