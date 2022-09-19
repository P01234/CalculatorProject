const getNumbers = Array.from(document.getElementsByClassName("button"));
const getOperator = Array.from(document.getElementsByClassName("operator"));
let previouslyNumber = Array("");
let actualNumber = Array("");
let usingOperator = "";
let nGet = ""
let usingOperator2 = undefined;
let getDisplay = document.querySelector("#getInput").value


let getNumber = function(){
    getNumbers.forEach(button =>{
        button.addEventListener("click", () => {
            previouslyNumber = button.textContent;
            nGet = actualNumber += previouslyNumber;
            //return nGet to another function.
            return validateEverything(previouslyNumber, actualNumber)
        })
    })
}
getNumber()
//to break when operator shows up. 
/*
if(previouslyNumber == '+'){
                usingOperator == previouslyNumber;
                previouslyNumber == "";
            }
            usingOperator2 = parseFloat(usingOperator);
            console.log(usingOperator2) HappyFace!
*/

let getOperatorSim = function(){
    getOperator.forEach(operator =>{
        operator.addEventListener("click", () =>{
            usingOperator = operator.textContent; 
            
        })
    })
}

function validateEverything( pastN, nowN){
    console.log(usingOperator + "\n" + pastN + "\n" + nowN)
    if(usingOperator = "+"){
        
        nowN = pastN
        pastN = ""
        getDisplay = document.querySelector("#getInput").value = nowN + "+" + pastN;
    }
     
    
}