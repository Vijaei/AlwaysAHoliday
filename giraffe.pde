// refrences https://www.openprocessing.org/sketch/202022


PImage img;
int smallPoint, largePoint;

void setup() {
  size(1000, 700);
  img = loadImage("plain.jpg");
  smallPoint = 2;
  largePoint = 150;
  imageMode(CENTER);
  noStroke();
  background(mouseX);
}

void draw() { 
  float pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  float transparenc = map(mouseY, 0, height, 0, 256);
  
  int x = int(random(img.width));
  int y = int(random(img.height));
  color pix = img.get(x, y);
  fill(pix,transparenc);
  ellipse(x, y, pointillize, pointillize);
  
  
  int x1 = int(random(img.width));
  int y1 = int(random(img.height));
  color pix1 = img.get(x1, y1);
  fill(pix1,transparenc);
  triangle(x1 + random(pointillize), y1+ random(pointillize), x1- random(pointillize), y1, x1, y1 - random(pointillize));
  
  
  int x2 = int(random(img.width));
  int y2 = int(random(img.height));
  color pix2 = img.get(x2, y2);
  fill(pix2,transparenc);
  rect(x2, y2, random(pointillize), random(pointillize));
  
  
  int x3 = int(random(img.width));
  int y3 = int(random(img.height));
  color pix3 = img.get(x3, y3);
  fill(pix3, transparenc);
  arc(x3 , y3 , pointillize, pointillize, random(-PI),(random(PI)));
  
}
 
