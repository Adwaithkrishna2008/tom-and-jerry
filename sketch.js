var bg,bgImg;
var tom,tomI,tomI2,tomH;
var jerry,jerryI,jerryH,jerryT,jerryI3;


function preload() {
    //load the images here
bgImg=loadImage("garden.png");
tomI=loadAnimation("cat2.png","cat3.png",
"cat4.png")
tomI2=loadImage("cat1.png");
tomH=loadAnimation("cat4.png");
jerryI=loadAnimation("mouse4.png","mouse1.png")
jerryH=loadAnimation("mouse2.png")
jerryT=loadAnimation("mouse3.png")
jerryI3=loadImage("mouse4.png")
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
bg=createSprite(400,200);
bg.addImage(bgImg);

tom=createSprite(750,440);
tom.addImage(tomI2);
tom.scale=0.1;

jerry=createSprite(100,440);
jerry.addImage(jerryI3);
jerry.scale=0.1;







}


function draw(){



    keyPressed();

tom.collide(jerry);
//jerry.debug=true;
    
if(tom.x-jerry.x<(tom.width-jerry.width)){
    tom.addAnimation("tomhappy",tomH)
    tom.changeAnimation("tomhappy")
    tom.velocityX=0;
    }
    if(jerry.x-tom.x<(jerry.width-tom.width)){
        jerry.addAnimation("jerryhappy",jerryH)
        jerry.changeAnimation("jerryhappy")
        
    }

    //jerry.debug=true;
    drawSprites();
}

function keyPressed(){

if(keyCode === LEFT_ARROW){

jerry.addAnimation("mousetease",jerryT)
jerry.changeAnimation("mousetease")
jerry.frameDelay=25;

}

if(keyCode === RIGHT_ARROW){

    jerry.addAnimation("mousetease",jerryT)
    jerry.changeAnimation("mousetease")
    jerry.frameDelay=25;
    
    }
    if(keyCode === UP_ARROW){

        jerry.addAnimation("mousemove",jerryI)
        jerry.changeAnimation("mousemove")
        jerry.frameDelay=25;
       
        } 

        if(keyCode === UP_ARROW){

            tom.addAnimation("tommove",tomI)
            tom.changeAnimation("tommove")
            tom.frameDelay=25;
            tom.velocityX=-4
        } 


}






