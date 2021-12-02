img="";
status1="";
function setup() {
    canvas=createCanvas(600,450);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status:Object detecting";
}
function modelLoaded() {
    console.log("modelLoaded");
    status1=true;
    objectDetector.detect(img, gotResult);
}
function preload() {
    img=loadImage("dog_cat.jpg");
}
function draw() {
    image(img,0,0,600,450);
    fill("#FF0000");
    text("Dog",150,100);
    noFill();
    stroke("#FF0000");
    rect(145,50,200,400)
    fill("#FF0000");
    text("Cat",280,95);
    noFill();
    stroke("#FF0000");
    rect(275,50,200,400)
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}