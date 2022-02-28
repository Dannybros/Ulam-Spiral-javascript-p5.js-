let x, y;
let num =1;
let stepSize = 40;
let stepNum = 1;
let direction =0;
let turnCounter = 0;

let totalNum; 

let px;
let py;

function setup(){
    createCanvas(520, 520);
    textFont("Courier");

    const row = width / stepSize;
    const col = height / stepSize;
    totalNum = row * col;

    x=width/2;
    y=height/2;
    background(0); //bgColor

    px=x;
    py=y;
}

function isPN(value){

 if(value == 1){
    return false;
 }

 for(var i = 2; i<=sqrt(value); i++){
    if( value % i ==0){
        return false
    }
 }

 return true
}

function draw(){
    /*  num  */
    // textSize(stepSize); //font-size
    // textAlign(CENTER, CENTER); //text-position
    // fill(255); //color
    // text(num, x, y); //text

    /*  rectangle  */
    // fill(127);
    // stroke(255);
    // rectMode(CENTER);
    // square(x, y, stepSize);

    /*  circle & path  */
    
    if(isPN(num)){
        fill(255);
        stroke(255);
        circle(x,y, stepSize * 0.5);
    }
    line(x,y,px,py);
    px=x;
    py=y;

    switch (direction) {
        case 0:
            x+=stepSize;
            break;
        case 1:
            y-=stepSize;
            break;
        case 2:
            x-=stepSize;
            break;
        case 3:
            y+=stepSize;
            break;
    }

    if(num % stepNum ==0){
        direction = (direction + 1) % 4;

        turnCounter++;

        if(turnCounter % 2 ==0){
            stepNum++;
        }
    }
    num++;

    if(num > totalNum){
        noLoop();
    }
}