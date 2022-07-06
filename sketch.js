var gameState= "play";
function preload(){
  snake_img= loadImage("Snake.png")
  cherry_img= loadImage("cherry.png")
  bomb_img= loadImage("bomb.png")
}

function setup() {
  createCanvas(400,400);
  Snake=createSprite(200,200,20,20);
  Snake.addImage("Snake",snake_img)
  Snake.scale=0.3
  edges=createEdgeSprites()
  score=0;
  cherryG= new Group();
  bombG=new Group();
}

function draw() 
{
  background("lightgrey");
  textSize(25);
  text("score: "+score,275 ,50);
  if(gameState==="play"){

  
  spawnCherries();
  spawnBombs();
drawSprites();
if(keyDown("w")){
  Snake.y=Snake.y-5
}
if(keyDown("s")){
  Snake.y=Snake.y+5
}
if(keyDown("a")){
  Snake.x=Snake.x-5
}
if(keyDown("d")){
  Snake.x=Snake.x+5
}
if(cherryG.isTouching(Snake)){
  cherryG.destroyEach();
  score=score+1
}
if(Snake.bounceOff(edges)||bombG.isTouching(Snake)){
  gameState="end";
}
  }
  else if(gameState==="end"){
    text("GameOver",150,200);
    text("Press R to Restart",110,220);
    if(keyDown("r")){
      gameState="play";
      score=0;
    }

  }
}
function spawnCherries(){
  if(frameCount%35===0){
    var cherry= createSprite(Math.round(random(10,390)),Math.round(random(10,390)));
    cherry.addImage("cherry",cherry_img);
    cherry.scale=0.2;
    cherry.lifetime= 120
    cherryG.add(cherry);
  }
}
function spawnBombs(){
  if(frameCount%100===0){
  var bomb= createSprite(Math.round(random(10,390)), Math.round(random(10,390)));
  bomb.addImage("bomb",bomb_img);
  bomb.scale=0.2;
  bomb.lifetime=120
  bombG.add(bomb);
  }
}





