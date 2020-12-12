const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var box1;

var ground;

function preload(){


}

function setup() {
  createCanvas(800,400);

engine = Engine.create();
world = engine.world;

box1 = Bodies.rectangle(400,100,50,50);
World.add(world,box1);

var bottle ={

  isStatic : true

}
ground = Bodies.rectangle(400,390,800,10,bottle);
World.add(world,ground);




  
}

function draw() {
  background("pink");  
  Engine.update(engine);

  rectMode(CENTER);
  var pos = box1.position;

  rect(pos.x,pos.y,50,50);

  console.log(ground.position.y);

 // rect(ground.position.x,ground.position.y,800,10);
  
}