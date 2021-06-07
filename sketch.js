var hero,heroIMG;
var zombie,zombieIMG;
var swordzombie,swordzombieIMG;

function preload(){
  heroIMG=loadImage("hero.png");
  zombieIMG=loadAnimation("zombie1.png","zombie2.png","zombie3.png","zombie4.png");
  swordzombieIMG=loadAnimation("swordzombie1.png","swordzombie2.png","swordzombie3.png","swordzombie4.png");
}
function setup() {
  createCanvas(1000,1000);
   hero=createSprite(400, 200, 50, 50);
   hero.addImage(heroIMG);
  
}

function draw() {
  background(500,500);
  if(keyDown("space") && boy.y >= 159) {
    boy.velocityY = -12;
  }  
  spawnzombies();
  drawSprites();

}
function spawnzombies() {
  if(frameCount % 60 === 0) {
  zombie=createSprite(50,350);
  zombie.addAnimation("zombie",zombieIMG);
  swordzombie=createSprite(400,400);
  swordzombie.addAnimation("swordzombie",swordzombieIMG)
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: zombie.addImage(zombieIMG);
              break;
      case 2: zombie.addImage(swordzombieIMG);
              break;
      default: break;
    }      
    zombie.lifetime = 300;
    swordzombie.lifetime = 300;
    
  }
}