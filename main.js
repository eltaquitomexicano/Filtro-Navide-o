narizX=0;
narizY=0;

function preload(){
 gorroDeSanta=loadImage("https://i.postimg.cc/6QzYMPgm/santa-hat-clipart-design-illustration-free-png.webp");
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("poseNet está inicializado");
}

function gotPoses(results){
if (results.length>0){
    console.log(results);
    narizX=results[0].pose.nose.x-50;
    narizY=results[0].pose.nose.y-180;
}
}

function draw(){
    image(video, 0, 0, 300, 300);
    //fill(252, 182, 3);
    //stroke(3, 252, 136);
    //circle(narizX, narizY, 20);
    image(gorroDeSanta, narizX, narizY, 150, 170);
}

function takeSnapshot(){
    save("fotoNavideña.png");
}