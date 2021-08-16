class Player{
constructor(){
this.index=null
this.name=null
this.distance=0
this.rank=null
}
getCount(){
    var getCountREF=database.ref("playercount");
    getCountREF.on("value",(data)=>{
    playercount=data.val()
 })
}
updateCount(count){
    database.ref("/").update({
    playercount:count
})
}
update(){
var playerIndex="players/player"+this.index
database.ref(playerIndex).set({
name:this.name,
distance:this.distance
})

}
static getPlayerInfo(){
var playerInfoRef=database.ref("players")
playerInfoRef.on("value", (data)=>{
allPlayers=data.val()    
})    
}
getCarsAtEnd (){
database.ref("CarsAtEnd").on("value",(data)=>{
this.rank=data.val();
});
}
static updateCarsAtEnd (rank){
database.ref('/').update({CarsAtEnd:rank});
}
}