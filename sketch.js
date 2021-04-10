var start, startImage;
var bgs, bgsImage;

var bg, bgImage;
var tad, tadImage;

var coin, coinsAni;

var fish1, fish1Image;

var heart, heartImage;

 gamestate= 0



function preload(){
//for the start
startImage = loadImage("start.png");
bgsImage = loadImage("bg4start.png");

// for level one
bgImage = loadImage("bg0.png");
tadImage = loadImage("tad.png");
coinAni = loadAnimation("c1.png", "c2.png","c3.png", "c4.png", "c5.png", "c6.png");
heartImage = loadImage("heart0.png");

//for level two 
fish1Image = loadImage("fish1.png");
}

function setup(){
createCanvas(600,600);


if(gamestate === 0 ){
 start = new Gamestate0();
 start.pictures();
}



}

function draw(){

    background(0);


    
    
    bgs.display();
    start.display();
}