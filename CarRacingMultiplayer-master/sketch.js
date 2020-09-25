



function preload(){
  track = loadImage("images/track.jpg");
}

function setup(){
   createCanvas(displayWidth - 20, displayHeight-30);
  
}


function draw(){
  background(rgb(198,135,103));
  image(track, 0,-windowHeight*4,windowWidth, windowHeight*5);
}
