var characterX = 100;
var characterY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var rectX=200
var rectY=250
var rectXSpeed;
var rectYSpeed;

var angleX=90
var angleY=200
var angleXSpeed;
var angleYSpeed;


var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400,400);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background('aqua');
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
  textFont('papyrus')
    text("Exit", 350,370)

    //character
  strokeWeight(5)
   stroke('pink');
    fill('yellow');
    circle(characterX,characterY,20);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    
  strokeWeight(2)
  stroke('black')
    fill('green');
    // draw the shape
    circle(shapeX, shapeY,20);
  
  
  fill('grey')
  rect(angleX,angleY,150,50)
  angleX+=5
  angleY+=5

  
  if(angleX > width)
    {
        angleX=0;
    }
    if(angleY < 0)
    {
        angleX = width;
    }
    if(angleY > height)
    {
        angleY = 0;
    }
    if(angleY < 0)
    {
        angleY = height;
    }
  fill('blue')
  rect(rectX,rectY,10,150)
  rectX+=5
  rectY+=2
  rectXSpeed=Math.floor(Math.random() * 10) + 1;
  rectYSpeed=Math.floor(Math.random() * 10) + 1;
  
  if(rectX > width)
    {
        rectX=0;
    }
    if(rectY < 0)
    {
        rectX = width;
    }
    if(rectY > height)
    {
        rectY = 0;
    }
    if(rectY < 0)
    {
        rectY = height;
    }
    
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(2);
        textSize(20);
        text("You Win!", width/2-50, height/2-50);
    }

    // create the shape based on the mouse click
    fill('purple');
    circle(mouseShapeX, mouseShapeY, 55);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}