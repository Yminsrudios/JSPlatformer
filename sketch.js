var sy = 10;
var sx = 120;
var sp = sx;
var yp = sy;
var vx = 300;
var r = 50;
var pg = 0;
var y = 400;
var xpv = 600;
var xppv = xpv;
var lv = 100;
var ypv = 310;
var vtx = 1200;
var vty = 310;
var vthx = 1600;
var vthy = 310;
var lvt = 100;
var lvth = 100;
var vlx = 2100;
var vly = 310;
var vjx = 2700;
var vjy = 310;
var vrx = 3100;
var vry = 310;
var vxx = 4200;
var vyy = 310;
var vwwx = 5200;
var vwwy = 310;
var vjjx = 6000;
var vjjy = 310;
var vttx = 6700;
var vtty = 310;
var lxx = 100;
var lyy = 100;
var lzz = 100;
var lww = 100;
var ll = 100;
var ly = 100
var lz = 100;
function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = loadImage("gru.png");
  back = loadImage("back.png");
  robotm = loadImage("robo.png");
  musSound =loadSound("mainmusic.mp3");
}
function draw() {
  background(0,200,10);
  image(back,0,0,600,1000);
  //musSound.play();
  fill(100,10,0);
  text(mouseY,100,100);
  text(mouseX, 100,200);
  noFill();
  fill(100,20,40);
  //rect(-100,windowWidth - 100,5000,1000);
  noFill();
  fill(200,0,0);//pleer
  image(ground,pg,y,100,100);
  image(ground,pg + 100,y,100,100);
  image(ground,pg + 200,y ,100,100);
  image(ground,pg + 300,y ,100,100);
  image(ground,pg + 400,y ,100,100);
  image(ground,pg + 500,y,100,100);
  image(ground,pg ,y + 100 ,100,100);
  image(ground,pg + 100,y + 100 ,100,100);
  image(ground,pg + 200,y + 100 ,100,100);
  image(ground,pg + 300,y + 100 ,100,100);  
  image(ground,pg + 400,y + 100 ,100,100);
  image(ground,pg + 500,y + 100 ,100,100);
  image(ground,pg,y + 200 ,100,100);
  image(ground,pg + 100,y + 200 ,100,100);
  image(ground,pg + 200,y + 200 ,100,100);
  image(ground,pg + 300,y + 200 ,100,100);  
  image(ground,pg + 400,y + 200 ,100,100);
  image(ground,pg + 500,y + 200 ,100,100);
  image(ground,pg + 600,y,100,100);
  image(ground,pg + 700,y,100,100);
  image(ground,pg + 800,y ,100,100);
  image(ground,pg + 900,y ,100,100);
  image(ground,pg + 1000,y ,100,100);
  image(ground,pg + 1100,y,100,100);
  image(ground,pg + 1200,y,100,100);
  image(ground,pg + 1300,y,100,100);
  image(ground,pg + 1400,y,100,100);
  image(ground,pg + 1500,y,100,100);
  image(ground,pg + 1600,y,100,100);
  image(ground,pg + 1700,y,100,100);
  image(ground,pg + 1800,y,100,100);
  image(ground,pg + 1900,y,100,100);
  image(ground,pg + 2000,y,100,100);
   image(ground,pg + 2100,y,100,100);
   image(ground,pg + 2200,y,100,100);
   image(ground,pg + 2300,y,100,100);
   image(ground,pg + 2400,y,100,100);
   image(ground,pg + 2500,y,100,100);
   image(ground,pg + 2600,y,100,100);
   image(ground,pg + 2700,y,100,100);
   image(ground,pg + 2800,y,100,100);
   image(ground,pg + 2900,y,100,100);
  image(ground,pg + 3000,y,100,100);
  image(ground,pg + 3100,y,100,100);
  image(ground,pg + 3200,y,100,100);
  image(ground,pg + 3300,y,100,100);
  image(ground,pg + 3400,y,100,100);
  image(ground,pg + 3500,y,100,100);
  image(ground,pg + 3600,y,100,100);
  image(ground,pg + 3700,y,100,100);
  image(ground,pg + 3800,y,100,100);
  image(ground,pg + 3900,y,100,100);
  image(ground,pg + 4000,y,100,100);
  image(ground,pg + 4100,y,100,100);
  image(ground,pg + 4200,y,100,100);
  image(ground,pg + 4300,y,100,100);
  image(ground,pg + 4400,y,100,100);
  image(ground,pg + 4500,y,100,100);
  image(ground,pg + 4600,y,100,100);
  image(ground,pg + 4700,y,100,100);
  image(ground,pg + 4800,y,100,100);
  image(ground,pg + 4900,y,100,100);
  image(ground,pg + 5000,y,100,100);
  image(ground,pg + 5100,y,100,100);
  image(ground,pg + 5200,y,100,100);
  image(ground,pg + 5300,y,100,100);
  image(ground,pg + 5400,y,100,100);
  image(ground,pg + 5500,y,100,100);
  image(ground,pg + 5600,y,100,100);
  image(ground,pg + 5700,y,100,100);
  image(ground,pg + 5800,y,100,100);
  image(ground,pg + 5900,y,100,100);
  image(ground,pg + 6000,y,100,100);
  image(ground,pg + 6100,y,100,100);
  image(ground,pg + 6200,y,100,100);
  image(ground,pg + 6300,y,100,100);
  image(ground,pg + 6400,y,100,100);
  image(ground,pg + 6500,y,100,100);
  image(ground,pg + 6600,y,100,100);
  image(ground,pg + 6700,y,100,100);
  image(ground,pg + 6800,y,100,100);
  image(ground,pg + 600,y + 200,100,100);
  image(ground,pg + 700,y + 200,100,100);
  image(ground,pg + 800,y + 200,100,100);
  image(ground,pg + 900,y + 200,100,100);
  image(ground,pg + 1000,y + 200,100,100);
  image(ground,pg + 1100,y + 200,100,100);
   image(ground,pg + 1200,y + 200,100,100);
   image(ground,pg + 1300,y + 200,100,100);
   image(ground,pg + 1400,y + 200,100,100);
   image(ground,pg + 1500,y + 200,100,100);
   image(ground,pg + 1600,y + 200,100,100);
   image(ground,pg + 1700,y + 200,100,100);
   image(ground,pg + 1800,y + 200,100,100);
   image(ground,pg + 1900,y + 200,100,100);
   image(ground,pg + 2000,y + 200,100,100);
   image(ground,pg + 2100,y + 200,100,100);
   image(ground,pg + 2200,y + 200,100,100);
   image(ground,pg + 2300,y + 200,100,100);
   image(ground,pg + 2400,y + 200,100,100);
   image(ground,pg + 2500,y + 200,100,100);
   image(ground,pg + 2600,y + 200,100,100);
   image(ground,pg + 2700,y + 200,100,100);
   image(ground,pg + 2800,y + 200,100,100);
   image(ground,pg + 2900,y+ 200,100,100);
  image(ground,pg + 3000,y+ 200,100,100);
  image(ground,pg + 3100,y+ 200,100,100);
  image(ground,pg + 3200,y+ 200,100,100);
  image(ground,pg + 3300,y+ 200,100,100);
  image(ground,pg + 3400,y+ 200,100,100);
  image(ground,pg + 3500,y+ 200,100,100);
  image(ground,pg + 3600,y+ 200,100,100);
  image(ground,pg + 3700,y+ 200,100,100);
  image(ground,pg + 3800,y+ 200,100,100);
  image(ground,pg + 3900,y+ 200,100,100);
  image(ground,pg + 4000,y+ 200,100,100);
  image(ground,pg + 4100,y+ 200,100,100);
  image(ground,pg + 4200,y+ 200,100,100);
  image(ground,pg + 4300,y+ 200,100,100);
  image(ground,pg + 4400,y+ 200,100,100);
  image(ground,pg + 4500,y+ 200,100,100);
  image(ground,pg + 4600,y+ 200,100,100);
  image(ground,pg + 4700,y+ 200,100,100);
  image(ground,pg + 4800,y+ 200,100,100);
  image(ground,pg + 4900,y+ 200,100,100);
  image(ground,pg + 5000,y+ 200,100,100);
  image(ground,pg + 5100,y+ 200,100,100);
  image(ground,pg + 5200,y+ 200,100,100);
  image(ground,pg + 5300,y+ 200,100,100);
  image(ground,pg + 5500,y+ 200,100,100);
  image(ground,pg + 5500,y+ 200,100,100);
  image(ground,pg + 5500,y+ 200,100,100);
  image(ground,pg + 5600,y+ 200,100,100);
  image(ground,pg + 5700,y+ 200,100,100);
  image(ground,pg + 5800,y+ 200,100,100);
  image(ground,pg + 5900,y+ 200,100,100);
  image(ground,pg + 6000,y+ 200,100,100);
  image(ground,pg + 6100,y+ 200,100,100);
  image(ground,pg + 6200,y+ 200,100,100);
  image(ground,pg + 6300,y+ 200,100,100);
  image(ground,pg + 6400,y+ 200,100,100);
  image(ground,pg + 6500,y+ 200,100,100);
  image(ground,pg + 6600,y+ 200,100,100);
  image(ground,pg + 6700,y+ 200,100,100);
  image(ground,pg + 6800,y,+ 200,100,100);
  image(ground,pg + 600,y + 100,100,100);
  image(ground,pg + 700,y + 100,100,100);
  image(ground,pg + 800,y + 100,100,100);
  image(ground,pg + 900,y + 100,100,100);
  image(ground,pg + 1000,y + 100,100,100);
  image(ground,pg + 1100,y + 100,100,100);
   image(ground,pg + 1200,y + 100,100,100);
   image(ground,pg + 1300,y + 100,100,100);
   image(ground,pg + 1400,y + 100,100,100);
   image(ground,pg + 1500,y + 100,100,100);
   image(ground,pg + 1600,y + 100,100,100);
   image(ground,pg + 1700,y + 100,100,100);
   image(ground,pg + 1800,y + 100,100,100);
   image(ground,pg + 1900,y + 100,100,100);
   image(ground,pg + 2000,y + 100,100,100);
   image(ground,pg + 2100,y + 100,100,100);
   image(ground,pg + 2200,y + 100,100,100);
   image(ground,pg + 2300,y + 100,100,100);
   image(ground,pg + 2400,y + 100,100,100);
   image(ground,pg + 2500,y + 100,100,100);
   image(ground,pg + 2600,y + 100,100,100);
   image(ground,pg + 2700,y + 100,100,100);
   image(ground,pg + 2800,y + 100,100,100);
   image(ground,pg + 2900,y+ 100,100,100);
  image(ground,pg + 3000,y+ 100,100,100);
  image(ground,pg + 3100,y+ 100,100,100);
  image(ground,pg + 3200,y+ 100,100,100);
  image(ground,pg + 3300,y+ 100,100,100);
  image(ground,pg + 3400,y+ 100,100,100);
  image(ground,pg + 3500,y+ 100,100,100);
  image(ground,pg + 3600,y+ 100,100,100);
  image(ground,pg + 3700,y+ 100,100,100);
  image(ground,pg + 3800,y+ 100,100,100);
  image(ground,pg + 3900,y+ 100,100,100);
  image(ground,pg + 4000,y+ 100,100,100);
  image(ground,pg + 4100,y+ 100,100,100);
  image(ground,pg + 4200,y+ 100,100,100);
  image(ground,pg + 4300,y+ 100,100,100);
  image(ground,pg + 4400,y+ 100,100,100);
  image(ground,pg + 4500,y+ 100,100,100);
  image(ground,pg + 4600,y+ 100,100,100);
  image(ground,pg + 4700,y+ 100,100,100);
  image(ground,pg + 4800,y+ 100,100,100);
  image(ground,pg + 4900,y+ 100,100,100);
  image(ground,pg + 5000,y+ 100,100,100);
  image(ground,pg + 5100,y+ 100,100,100);
  image(ground,pg + 5200,y+ 100,100,100);
  image(ground,pg + 5300,y+ 100,100,100);
  image(ground,pg + 5500,y+ 100,100,100);
  image(ground,pg + 5500,y+ 100,100,100);
  image(ground,pg + 5500,y+ 100,100,100);
  image(ground,pg + 5600,y+ 100,100,100);
  image(ground,pg + 5700,y+ 100,100,100);
  image(ground,pg + 5800,y+ 100,100,100);
  image(ground,pg + 5900,y+ 100,100,100);
  image(ground,pg + 6000,y+ 100,100,100);
  image(ground,pg + 6100,y+ 100,100,100);
  image(ground,pg + 6200,y+ 100,100,100);
  image(ground,pg + 6300,y+ 100,100,100);
  image(ground,pg + 6400,y+ 100,100,100);
  image(ground,pg + 6500,y+ 100,100,100);
  image(ground,pg + 6600,y+ 100,100,100);
  image(ground,pg + 6700,y+ 100,100,100);
  image(ground,pg + 6800,y,+100,100,100);
  sy += 10;
  if(sy == 310){
    sy -= 10;
  }
  noFill();
  fill(255);
  rect(40,windowHeight - 200,50,50);
  rect(350,windowHeight - 150,50,50);
  rect(350,windowHeight - 250,50,50);
  rect(160,windowHeight - 200,50,50);
  noFill();
  if(mouseX >= 30 && mouseX <=90 && mouseY >= 490 && mouseY <= 550 && mouseIsPressed == true){
    pg += 10;
    xpv += 10;
    xppv += 10;
    vtx += 10;
    vthx += 10;
    vlx += 10;
    vjx += 10;
    vrx += 10;
    vxx += 10;
    vwwx += 10;
    vjjx += 10;
    vttx += 10;
  }
  if(mouseX >= 150 && mouseX <= 230 && mouseY >=490 && mouseY <= 550 && mouseIsPressed == true){
  pg -= 10;
    xpv -= 10;
    xppv -= 10;
    vtx -= 10;
    vthx -= 10;
    vlx -=10;
    vjx -= 10;
    vrx -= 10;
    vxx -= 10;
    vwwx -= 10;
    vjjx -= 10;
    vttx -= 10;
  }
  if(mouseX >=340 && mouseX <= 410 && mouseY >= 540 && mouseY <= 610 && mouseIsPressed == true){
    sy -= 20;
  }
  if(mouseX >= 340 && mouseX <=390 && mouseY >= 440 && mouseY <= 506){
    fill(100,100,20);
    rect(sp,311,50,50);
    noFill();
    sp += 10;
    if(sp == vx){
      lv -= 50;
    }
    if(mouseIsPressed == false){
      sp  = sx;
    }
  }
  if(lv < 100){
    ypv += 100;
  }
  fill(r,100,2);
  rect(xpv,ypv,100,100);
  noFill();
  fill(r,100,2);
  rect(vtx,vty,100,100);
  rect(vthx,vthy,100,100);
  rect(vlx,vly,100,100);
  rect(vjx,vjy,100,100);
  rect(vrx,vry,100,100);
  rect(vxx,vyy,100,100);
  rect(vwwx,vwwy,100,100);
  rect(vjjx,vjjy,100,100);
  noFill();
  if(xpv < 358){
    fill(200,100,50);
    rect(xppv,ypv,50,50);
    noFill();
    xppv -= 10;
  }
  if(xppv ==  120){
    xppv = xpv;
  }
   if(sp == vtx){
      lvt -= 50;
    }
  if(lvt < 100){
    vty += 200;
  }
  if(sp == vthx){
      lvth -= 50;
    }
  if(lvth < 100){
    vthy += 200;
  }
  if(sp == vxx){
      lxx -= 50;
}
  if(sp == vwwx){
      lyy -= 50;
}
  if(sp == vwwx){
      lyy -= 50;
}
  if(sp == vjjx){
      lzz -= 50;
}
    if(sp == vjx){
      lz -= 50;
}
    if(sp == vlx){
      ly -= 50;
}
  if(lxx < 100){
    vyy += 100;
  }
  if(lyy < 100){
    vwwy += 100;
  }
  if(lzz < 100){
    vjjy += 100;
  }
  if(ll < 100){
    vry += 100;
  }
  if(ly < 100){
    vly += 100;
  }
  if(lz < 100){
    vjy += 100;
  }
}