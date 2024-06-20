// How to generate the random color -->done

const randomColor=()=>{
   const letters="0123456789ABCDEF"
   let hex="#"
  for (let i = 0; i < 6; i++) {
   const random= Math.floor(Math.random()*16)
    hex+=letters[random]
  }
  return hex
}

let intervalId



const startColorChange=()=>{

  intervalId=setInterval(changeColor,1000)

  function changeColor(){
    document.querySelector("body").style.backgroundColor=randomColor()
  }

  
  
}

const stopColorChange=()=>{
    clearInterval(intervalId)
}

document.querySelector("#start").addEventListener("click",startColorChange)
document.querySelector("#stop").addEventListener("click",stopColorChange)

