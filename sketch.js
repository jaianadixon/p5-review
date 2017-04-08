var x=0;
var y=0;
sizes = [5,10,15,20,25,30,35,40,45,50,55];

function setup(){
    createCanvas(600,500);
}

function draw(){
    background(30,255,300);
    
    redCircle();
    greenrectangle();
    whiteLine();
    changebackground();
    rowOfcircles(250);
    rowOfcircles(350);
}

function redCircle(){
    noStroke();
    fill(2550,0,0);
    ellipse(mouseX,mouseY,100,100); 
}

function greenrectangle(){
    fill(0,255,0);
    x=200;
    y+=3;
    rect(x,y,100,height);
    
     if(y > height){
        y= 0 - height;
    }
}

function whiteLine(){
    var i = 0;
    yLine=20;
    while(i<10){
       stroke(255);
    line(100,yLine,500,yLine);
    i++;
    yLine+=20;
    }
}

function changebackground(){
    
    if(mouseIsPressed && mouseY < 200){
        background(0);
    }
    else if(mouseIsPressed && mouseY >= 200){
        background(244, 66, 229);
    }
}

function rowOfcircles(yRow){
    var xCircle= 40;
    for(var i=0;i<10; i++){
        noStroke();
        fill(0, 97, 255);
        ellipse(xCircle, yRow,sizes[i],sizes[i]);
        xCircle += 50;
    }
}