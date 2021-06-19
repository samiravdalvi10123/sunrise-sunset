const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg)
background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/timezone/Asia/Kolkata")
    //change the data in JSON format
var responseJSON = await response. json();
    // write code slice the datetime
var datetime = responseJSON.datetime;
console.log(datetime);
var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if(hour> 4 && hour < 6){
    bg = ("sunrise1.png")
}
if(hour>6 && hour< 8){
    bg = ("sunrise2.png")
}
if(hour>8 && hour < 10){
    bg = ("sunrise3.png")
}
if(hour>10 && hour< 12 ){
    bg = ("sunrise4.png")
}
if(hour>12 && hour< 14){
    bg = ("sunrise5.png")
}
if(hour>=14 && hour<= 16){
    bg = ("sunrise6.png")
}
if(hour>=16 && hour<= 18){
   bg =  ("sunset7.png")
}
if (hour>18 && hour< 20){
    bg = ("sunset8.png")
}
if(hour>20 && hour < 22){
    bg = ("sunset9.png")
}
if(hour > 22 && hour === 0){
    bg = ("sunset10.png")
}
if(hour === 0 && hour < 2){
    bg = ("sunset11.png")
}
if(hour> 2 && hour < 4){
    bg = ("sunset12.png")
}
 //load the image in backgroundImg variable here
 backgroundImg = loadImage(bg);
}
