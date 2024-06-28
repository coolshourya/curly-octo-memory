function preload(){
    
}

function setup(){
canvas=createCanvas(400,400);
video=createCapture(VIDEO);
video.hide();
filter="";
}

function draw(){
    image(video,0,0,400,400);
tint(filter);
}
function apply_filter(){
    filter=document.getElementById("okay").value;

}

function take_snapshot(){
    save("picture.png");
}