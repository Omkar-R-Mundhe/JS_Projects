const form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const height=parseFloat(document.querySelector("#height").value)
    const weight=parseFloat(document.querySelector("#weight").value)
    if(height<=0 || isNaN(height) ){
        alert("Enter height in proper form")
    }
    if(weight<=0 || isNaN(weight) ){
        alert("Enter weight in proper form")
    }
    const BMI=((weight/(height*height)))

    document.querySelector("#results").innerHTML=`BMI is ${BMI.toFixed(1)}`


  
    
    
})
