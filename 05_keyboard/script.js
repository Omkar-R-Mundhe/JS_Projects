const addText=document.querySelector("#insert")

document.addEventListener("keyup",typeKey)

function typeKey(e){
    
   addText.innerHTML=`${e.key} is pressed`
}