
const doomToAdd = 5;
let finalDoom = 0;
function doom(){
    const elGato = document.getElementById("catImage");  
   finalDoom += doomToAdd;
   elGato.style.width = finalDoom + "px";

  
}