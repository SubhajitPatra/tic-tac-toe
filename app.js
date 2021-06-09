var platform= document.getElementById("platform");
var playerform= document.getElementById("playerform");
var boxes= document.querySelectorAll("td.square-box");
var gameinfo = document.getElementById("gameinfo");
var playerTurn= "1";
var x_choice = "1";
var o_choice = "2";
var input1 = document.getElementById("input1");
var gameinfobg= document.getElementById("gameinfobg");
var input2 = document.getElementById("input2");
var player1 = document.getElementById("player1-name");
var player2 = document.getElementById("player2-name");     
var tableblur= document.getElementById("tableblur");
boxes.forEach(box => {
    box.addEventListener("click", (e) =>{
        const event = new CustomEvent('tap', { detail: box, bubbles: true, cancelable: true, view: window });
        if(e.target.dispatchEvent(event)){
            console.log("tap event dispatched", event);
        }
        else{
            console.log("tap event cannot be dispatched", event);
        }
    })
})
document.addEventListener("tap", ontap )
function ontap (e){
    //console.log(e)
    var value= e.detail.innerText;
    if(value=== ""){
        if(playerTurn=== "1"){
            e.detail.innerText= "x";
            playerTurn= "2";
            var result = checkgame();
            if(result=== true){
                gameinfo.innerHTML= `Player ${player1.innerText} wins. <b id="replay-button">Replay?</b>`;
                document.removeEventListener("tap", ontap);
                tableblur.style.filter="blur(8px)";
                var styles={
                    
                    "z-index": "2",
                    "text-align": "center",
                    
                }
                
                Object.assign(gameinfo.style, styles);
            }

        }
        else{
            playerTurn="1";
            e.detail.innerText= "o";
            var result = checkgame();
            if(result=== true){
                gameinfo.innerHTML= `Player ${player2.innerText} wins. <b id="replay-button">Replay?</b>`;
                document.removeEventListener("tap", ontap);
                tableblur.style.filter="blur(8px)";
                var styles={
                    
                    "z-index": "2",
                    "text-align": "center",
                    
                }
                
                Object.assign(gameinfo.style, styles);
                
            }
        }
        
    }
    else{

    }
}
function startgame(){
    console.log("Starting game");
    console.log("input1: ", input1.value);
    console.log("input2: ", input2.value);
    platform.style.display= "flex";
    playerform.style.display= "none";
    player1.innerText= input1.value;
    player2.innerText= input2.value;
    player1.style.fontFamily= "cursive";
    player1.style.fontSize= "40px";
    player1.style.textShadow ="blue 2px 2px";
    player2.style.textShadow ="blue 2px 2px";
    player2.style.fontFamily= "cursive";
    player2.style.fontSize= "40px";
    alert("The game has started");

    
}
window.addEventListener("load",  (e)=>{
    platform.style.display= "none";
    playerform.style.display= "flex";
    console.log("on load")
    
})
function checkgame(){
    console.log("Checking game");
    for (let index = 1; index <= 3; index++) {
        // checking row
        var value1= document.getElementById(`i${index}1`).innerText;
        var value2= document.getElementById(`i${index}2`).innerText;
        var value3= document.getElementById(`i${index}3`).innerText;
        if(value1===value2&&value2===value3){
            console.log(`row ${index} is matching`);
            if(value1!== "") {
                for (let j = 1; j <= 3; j++) {
                    document.getElementById(`i${index}${j}`).style.backgroundColor= "cyan";
                    
                    
                }
                return true;}

            
            
        }
        
         // checking column
         var value1= document.getElementById(`i1${index}`).innerText;
         var value2= document.getElementById(`i2${index}`).innerText;
         var value3= document.getElementById(`i3${index}`).innerText;
         if(value1===value2&&value2===value3){
             console.log(`column ${index} is matching`);
             if(value1!== "") {
                for (let j = 1; j <= 3; j++) {
                    document.getElementById(`i${j}${index}`).style.backgroundColor= "cyan";
                    
                    
                }
                return true;}

         }
      
    }
      // checking left diagonal
      var value1= document.getElementById("i11").innerText;
      var value2= document.getElementById("i22").innerText;
      var value3= document.getElementById("i33").innerText;
      if(value1===value2&&value2===value3){
          console.log(`left-diagonal is matching`);
          if(value1!== "") {
            document.getElementById("i11").style.backgroundColor= "cyan";  
            document.getElementById("i22").style.backgroundColor= "cyan";  
            document.getElementById("i33").style.backgroundColor= "cyan";  
            return true;}
      }   
      // checking right diagonal
      var value1= document.getElementById("i13").innerText;
      var value2= document.getElementById("i22").innerText;
      var value3= document.getElementById("i31").innerText;
      if(value1===value2&&value2===value3){
          console.log(`right-diagonal is matching`);
          if(value1!== "") {
            document.getElementById("i31").style.backgroundColor= "cyan";  
            document.getElementById("i22").style.backgroundColor= "cyan";  
            document.getElementById("i13").style.backgroundColor= "cyan";  
            return true;}
      } 
    return false;
}
function replay(){
   boxes.forEach(box=>{
       box.innerText="";
       box.style.backgroundColor="";

   })
   gameinfo.innerHTML="";
   document.addEventListener("tap", ontap);
   tableblur.style.filter="blur(0px)";
   
   
}
