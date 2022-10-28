img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
Gamestatus="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

    img= loadImage(".imgs/mario/mario01.png");
}

function setup() {
	canvas = createCanvas(1240,400);
	canvas.parent('Canvas')
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game-console");

	poseNet=ml5.poseNet(video , modelLoaded);
	poseNet.on("poses",gotPoses);
}

function modelLoaded(){
	console.log("modelLoaded");
}

function gotPoses(results){
    if(results.length>0){
      noseX=results[0].pose.nose.x;
      noseX=results[0].pose.nose.Y
      console.log("noseX ="+ noseX+"noseY="+noseY);
    }	
}


function draw(){
	game();
}







