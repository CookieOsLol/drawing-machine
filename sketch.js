let noiseOffset = 0.0;
let strokeWidth = 5;
let img;
let img2;
let img3;
let img4;
let recoil;

function preload(){
img = loadImage('assets/bh1.png');
img2 = loadImage('assets/bh2.png');
img3 = loadImage('assets/bh3.png');
img4 = loadImage('assets/td.png');
recoil = random(40,150);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(154,130,64);
image(img4,400,10,1000,1000);

}

function draw() {


if (mouseIsPressed){
//image(img2,mouseX-60,mouseY-50,150,150);
image(img2,mouseX -(recoil),mouseY-(recoil),150,150);

  //opposite ->    //line(width -mouseX, height -mouseY,width -pmouseX,height-pmouseY);
  //background(220,50,133,5);
//strokeWeight(strokeWidth);
//noiseOffset = noiseOffset + 0.01;
//noiseOffset += 0.05;
//strokeWidth = noise(noiseOffset) * 100;
//stroke(map(mouseX, 0, 600, 0, 255,true))
//line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
//line(mouseX, mouseY, pmouseX, pmouseY);
}

}

function keyTyped(){

  if ( key === 's'){
    //save this image
    saveCanvas('fileName','png');
  } else if (key === 'c'){
//clear the images
clear();
background(154,130,64);
image(img4,400,10,1000,1000);

  }

  return false


}
