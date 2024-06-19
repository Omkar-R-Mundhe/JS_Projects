const randomNumber=Math.floor(Math.random()*(100)+1)


const myForm=document.querySelector(".form")
let previous_Guess=0
let guess_Remaining=10





let myArray=[]
    myForm.addEventListener("submit",(e)=>{
        e.preventDefault()

        const guessedNumber=parseInt(document.querySelector("#guessField").value)
        myArray.push(guessedNumber)
        if(guessedNumber<0||isNaN(guessedNumber)||guessedNumber===""){
        alert("Enter valid number between 0 to 100")
    }
        
        
        if(guessedNumber===randomNumber && guess_Remaining>0){
               document.querySelector(".lowOrHi").innerHTML=`You guessed right!`
               
               
    
        }else if(guessedNumber>randomNumber&&guess_Remaining>0){
           document.querySelector(".lowOrHi").innerHTML=`Enter lower than ${guessedNumber}`
           
           guess_Remaining--
        
           document.querySelector(".guesses").innerHTML=JSON.stringify(myArray)
           document.querySelector(".lastResult").innerHTML=`${guess_Remaining}`

            
        }else if(guessedNumber<randomNumber&&guess_Remaining>0){
            document.querySelector(".lowOrHi").innerHTML=`Enter higher than ${guessedNumber}`
           
            guess_Remaining--
            document.querySelector(".guesses").innerHTML=JSON.stringify(myArray)

            document.querySelector(".lastResult").innerHTML=`${guess_Remaining}`
        }
    
    })

    

    


 
