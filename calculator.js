let operator = "";
let previousValue = "";
let currentValue = "";
let result;
document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll(".button");
    let operators = document.querySelectorAll(".operator")
    let currentNumber = document.querySelector("#getFirstInput");
    let previousNumber = document.querySelector("#getSecondInput");
    let currentValueHolder;
    let equals = document.querySelector("#equals").addEventListener("click", operate);
    let roundButton = document.querySelector(".specialButton").addEventListener("click", roundResult);
    let deleteNumber = document.querySelector("#delete").addEventListener("click", deleteAll);
    
    let defineOpe = function(operatorGet){
        operator = operatorGet;
    }

    let getNumber = function(number){
        currentValue = number;
        if(operator === ""){
            currentValueHolder = currentNumber.textContent += currentValue;
        }else if(currentNumber.textContent.includes(".")){
            while(currentNumber.text == ","){
                currentNumber.textContent = currentValue;
            }
        }
        else{
            display();
        }
    }



    let display = function(){
        if(previousValue === ""){
            previousValue = currentValue;
            currentValue = "";
            currentNumber.textContent = currentValueHolder+operator;
            currentValueHolder = "";
        }else{
            displayUpdate();
        }
        
    }

    let displayUpdate = function(){
        previousValue = currentValue;
        currentValue = "";
        previousNumber.textContent += `${previousValue}`;
    }

    function operate(){
        let firstValue = parseFloat(currentNumber.textContent);
        let secondValue = parseFloat(previousNumber.textContent);
        switch(operator){
            case"+":
                result = firstValue + secondValue;
                currentNumber.textContent = result;
                return roundResult(result);
            case"-":
                result = firstValue - secondValue;
                currentNumber.textContent = result;
                return roundResult(result);
            case"/":
                result = firstValue / secondValue;
                currentNumber.textContent = result;
                return roundResult(result);
            case"x": 
                result = firstValue * secondValue; 
                currentNumber.textContent = result;
                return roundResult(result);
            case"^":
                result = firstValue ** secondValue;
                currentNumber.textContent = result;
                return roundResult(result);
            case"%":
                result = firstValue % secondValue;
                currentNumber.textContent = result;
                return roundResult(result);
            default:
                result = firstValue + secondValue;
                currentNumber.textContent = result;
                return roundResult(result);

        } 
    }

    function roundResult(rounder){
        let a = Math.round(rounder);
        let numberRounded = parseFloat(a);
        currentNumber.textContent = numberRounded;
    }

    function deleteAll(){
        operator = "";
        previousValue = "";
        currentValue = "";
        currentNumber.textContent = "";
        previousNumber.textContent = "";
        result = "";

    }

    operators.forEach(operatorDefiner =>{
        operatorDefiner.addEventListener("click", () =>{
            defineOpe(operatorDefiner.textContent);
        })
    })

    numbers.forEach(defineNumber => {
        defineNumber.addEventListener("click", () =>{
            getNumber(defineNumber.textContent);
        })
    });

});