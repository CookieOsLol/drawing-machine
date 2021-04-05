function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(15);
}

function draw() {
  if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX,pmouseY);
  //opposite ->    //line(width -mouseX, height -mouseY,width -pmouseX,height-pmouseY);

  }
}


function savePng(){
  
  if ( key === 's'){
    //save this image
    saveCanvas('fileName','png')
    
  }
  return false 
  
  
}