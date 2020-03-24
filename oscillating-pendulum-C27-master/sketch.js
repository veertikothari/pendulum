
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,holder,ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var ground_options = {
  isStatic:true
}
var holder_options = {
  isStatic:true
}
ground =Bodies.rectangle(200,380,20,90,ground_options);
World.add(world,ground);
holder =Bodies.rectangle(200,150,10,90,holder_options);
World.add(world,holder);

var ball_options= {
  'restitution': 0.1,
  'density' :1
}

ball=Bodies.circle(200,155,20,ball_options);
World.add(world,ball);
console.log(ball);
console.log(holder);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,20);
  rect(holder.position.x,holder.position.y, 20,290);
  ellipse(ball.position.x, ball.position.y,30,30);
}









