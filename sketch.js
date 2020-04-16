const E = Matter.Engine;
const W = Matter.World;
const B = Matter.Bodies;

var engine;
var world;
var ground;
var ball;
function setup(){
  createCanvas(400,400);
  engine = E.create();
  world = engine.world;
  ground = B.rectangle(200,390,400,20,{isStatic:true});
  ball = B.circle(200,50,20,{restitution:1.0});
  W.add(world,ground);
  W.add(world,ball);
  E.run(engine);
}
function draw(){
  background(0);
  fill(255);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}