var bd,bdi,start,start1,bgi,doc,doc1,home,home1,p,p1,s,s1,g,g1,r,r1,l,l1;
var gameState=0;
var title=0;
var one=1;
var two=2;

function preload() {
 bdi=loadImage("bdd.jpg");
 start1=loadImage("st.jpg");
 bgi=loadImage("bg.jpg")
 doc1=loadImage("doc.png")
 home1=loadImage("hom.jpg")
 p1=loadImage("precautions.jpg")
 s1=loadImage("symptoms.jpg")
 r1=loadImage("report.jpg")
 g1=loadImage("game.jpg")
 l1=loadImage("lab.jpg")
}


function setup() {
  createCanvas(380,720);
bd=createSprite(175,300,350,600);
bd.addImage(bdi);

start=createSprite(215,470,120,40)
start.addImage(start1)

start.scale=0.25
home=createSprite(190,670,120,40)
home.addImage(home1)
home.scale=0.25




doc=createSprite(190,245,120,40)
doc.addImage(doc1)
doc.scale=0.2
doc.visible=false

s=createSprite(100,90,60,60)
s.addImage(s1)
s.scale=0.4
s.visible=false

p=createSprite(100,260,70,40)
p.addImage(p1)
p.scale=0.41
p.visible=false

r=createSprite(100,430,65,60)
r.addImage(r1)
r.scale=0.41
r.visible=false

l=createSprite(280,430,65,60)
l.addImage(l1)
l.scale=0.41
l.visible=false

g=createSprite(280,260,65,60)
g.addImage(g1)
g.scale=0.41
g.visible=false

}

function draw() {
  background(bgi);
if(gameState===0){
  bd.visible=true;
  home.visible=false;
  start.visible=true;
  p.visible=false;
  r.visible=false;
  l.visible=false
  g.visible=false;
  s.visible=false;
  if(mousePressedOver(start)){
    gameState=1
  }
}
  
  
  
  if(gameState===1){
    
    bd.visible=false;
    start.visible=false;
    doc.visible=true;
    p.visible=false
    home.visible=true
    r.visible=false;
    l.visible=false
    g.visible=false;
    s.visible=false;
stroke("WHITE");
textSize(17);
fill("white");
  text ("HEY!!",5,30)
  text("I am Dr Charles and",5,50 )
  text("I will guide you and help you to   ",5,70 )
  text("beat the acute disease Diabetes.",5,90)
  text("So lets start this journey  to make you ",5,110)
  text("fit and healthy and defeat this disease ",5,130 )
  text("of Diabetes ",5,150 )

stroke("#28578a")
textSize(22)
fill("#28578a")
  text("First let me tell you 'What is Diabetes?' ",2,370)
  textSize(14)
  text("Diabetes is a disease that occurs when your blood glucose,",2,410)
  
  text("also called blood sugar, is too high. Blood glucose is your",2,440)
  text("main source of energy and comes from the food you eat.",2,470)
  text("Insulin, a hormone made by the pancreas, helps glucose",2,500)
  text("from food get into your cells to be used for energy.",2,530)
  text("Sometimes your body doesn’t make enough or any—insulin.",2,560)
  text("or doesn’t use insulin well Glucose then stays in your ",2,590)
  text("blood and doesn’t reach your cells.",2,620)
  
  }
  if(mousePressedOver(home)){
    gameState=2}
   
   
    
  if(gameState===2){
    bd.visible=false;
    home.visible=false;
    start.visible=false;
    doc.visible=false;
    s.visible=true;
    p.visible=true;
    r.visible=true;
    l.visible=true;
    g.visible=true;
    }
   

  drawSprites();
}