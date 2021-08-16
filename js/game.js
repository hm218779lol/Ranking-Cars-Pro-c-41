class Game {
constructor(){
}
getState(){
    var gamestateREF=database.ref("gamestate")
    gamestateREF.on("value",function(data){
    gamestate=data.val()
})
}
update(state){
    database.ref("/").update({
    gamestate:state    
})
}
async start(){
        if(gamestate===0){
        player=new Player();
        var playerCountRef=await database.ref("playercount").once("value")
            if(playerCountRef.exists()){
            playercount=playerCountRef.val()
            player.getCount();
            }
        form=new Form ();
        form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    cars=[car1,car2,car3,car4]
    car1.addImage(car1Img)
    car2.addImage(car2Img)
    car3.addImage(car3Img)
    car4.addImage(car4Img)
}
play(){
    form.hide()
    textSize(30)
    text("GameStart", 120,100)
    Player.getPlayerInfo()
    player.getCarsAtEnd()
    if(allPlayers!==undefined){
        background("lightgrey")
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
        var displayPosition=130
        var index=0;
        var x=175;
        var y
        for(var plr in allPlayers){
        index=index+1
        x=x+200
        y=displayHeight-allPlayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index){
            camera.position.x=displayWidth/2
            camera.position.y=cars[index-1].y
            stroke(10);
            fill("red")
            ellipse(x,y,60,60)
        }

        }
    }
    if(keyIsDown(UP_ARROW)&&(player.index!==null)){
        player.distance+=50
        player.update()
    }
    if(player.distance>=4150){
        gamestate=2
        player.rank+=1
        Player.updateCarsAtEnd(player.rank)
    }
    drawSprites();
}
end(){
console.log("Game Over")
console.log(player.rank);
}
}