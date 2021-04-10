class GameState1{

    constructor(){

    }

    pics(){
        tad = createSprite(20,300,20,20);
        tad.addImage(tadImage);
        tad.x = mouseX;
        tad.y = mouseY;

        bg = createSprite(300,300,30,30);
        bg.addImage(bgImage);

        
        }
    coinsNlife(){
        if(frameCount%100===0){
            coin = createSprite(300,10,30,30);
            coin.addAnimation(coinsAni);
            coin.x = Math.round(random(10,500));
            coin.velocityY(-3);
            coin.lifetime = 100;
        }

        if(coins=15){
            
        }

        if(frameCount%500===0){
            heart = createSprite(300,10,30,30);
            heart.addImage(heartImage);
            heart.velocityX(3);
            heart.lifetime = 100;

        }
    }



    display(){

    
}

}
