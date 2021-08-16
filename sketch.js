var database, gamestate=0, playercount 
var form, player, game
var canvas, backgroundImage
var  allPlayers
var car1,car2,car3,car4,cars

function preload(){
car1Img=loadImage("images/car1.png")
car2Img=loadImage("images/car2.png")
car3Img=loadImage("images/car3.png")
car4Img=loadImage("images/car4.png")
trackimg=loadImage("images/track.jpg")
}

function setup(){
canvas=createCanvas(displayWidth-20,displayHeight-30);
database=firebase.database();
game=new Game()
game.getState()
game.start()

}

function draw(){
if(playercount===4){
game.update(1)
}
if(gamestate===1){
clear()
game.play()
}
if(gamestate===2){
game.end()
}
}

