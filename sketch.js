
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg_image,Alien,spaceShip,AlienImg;
var world,SpaceShip;
var bg_music;
var Alien2,Alien3,Alien4,Alien5,Alien6;
var Alien7,Alien8,Alien9,Alien10,Alien11,Alien12;
var Alien13,Alien14,Alien15,Alien16,Alien17,Alien18,Alien19,Alien20,Alien21,Alien22,Alien23
var Alien24,Alien25,Alien26,Alien27,Alien28;
var player;

var PlayerAngle
var Laser = [];

var laserImg;
var balls = []


function preload(){

  bg_image = loadImage("—Pngtree— star space transparency background_5439546.png");
  bg_music = loadSound("in-orbit-1153.mp3");
  //AlienImg = loadImage("clipart4321245 (1).png")
 

}


function setup() {
  createCanvas(windowWidth,windowHeight);


  bg_music.loop();

  var options = {
    isStatic: true
  };
  
  
 
 
  


 
 

 
 

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  

 player = new Player(600,500,200,200);


 
  
 Alien = new alien(100,90,100,100);
 Alien2 = new alien(200,90,100,100);
 Alien3 = new alien(300,90,100,100);
 Alien4 = new alien(400,90,100,100);
 Alien5 = new alien(500,90,100,100);
 Alien6 = new alien(600,90,100,100);
 Alien7 = new alien(700,90,100,100);
 Alien8 = new alien(800,90,100,100);
 Alien9 = new alien(900,90,100,100);
 Alien10 = new alien(1000,90,100,100);
 Alien11 = new alien(1100,90,100,100);
 Alien12 = new alien(1200,90,100,100);
 Alien13 = new alien(150,200,100,100);
 Alien14 = new alien(250,200,100,100);
 Alien15 = new alien(350,200,100,100);
 Alien16 = new alien(450,200,100,100);
 Alien17 = new alien(550,200,100,100);
 Alien18 = new alien(650,200,100,100);
 Alien19 = new alien(750,200,100,100);
 Alien20 = new alien(850,200,100,100);
 Alien21 = new alien(950,200,100,100);
 Alien22 = new alien(1050,200,100,100);
 Alien23 = new alien(1150,200,100,100);
 Alien24 = new alien(400,300,100,100);
 Alien25 = new alien(500,300,100,100);
 Alien26 = new alien(600,300,100,100);
 Alien27 = new alien(700,300,100,100);
 Alien28 = new alien(800,300,100,100);
 //laser1 = new laser(600,500,30,30);-
 
  

 

}

//Matter.Body.setVelocity(Alien.body,{x:0,y:8})
function draw() 
{

 
  background(bg_image);
  //image(AlienImg,Alien.position.x,Alien.position.y,50,180)
  

  
 player.display();
 
 //laser1.display();
  Alien.display();
  Alien2.display();
  Alien3.display();
  Alien4.display();
  Alien5.display();
  Alien6.display();
  Alien7.display();
  Alien8.display();
  Alien9.display();
  Alien10.display();
  Alien11.display();
  Alien12.display();
  Alien13.display();
  Alien14.display();
  Alien15.display();
  Alien16.display();
  Alien17.display();
  Alien18.display();
  Alien19.display();
  Alien20.display();
  Alien21.display();
  Alien22.display();
  Alien23.display();
  Alien24.display();
  Alien25.display();
  Alien26.display();
  Alien27.display();
  Alien28.display();
  
  


 
  

 
 
}


// function keyPressed()

//{
  //if(keyCode === 32 ){
    //Matter.Body.applyForce(laser1.body,{x:0,y:0},{x:0,y:-0.05})
   //}

//}
function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    
      var posX = player.body.position.x;
      var posY = player.body.position.y;
      var angle = player.body.angle;

      var laser1 = new laserShoot(posX, posY, 100, 100, angle);
      laser1.display();

      laser1.trajectory = [];
      Matter.Body.setAngle(laser1.body, angle);
      Laser.push(laser1);
      
    
  }
}

function keyReleased() {
  if (keyIsDown(UP_ARROW)) {
    if (Laser.length) {
      var angle = player.body.angle;
      Laser[Laser.length - 1].shoot(angle);
    }
  }
}