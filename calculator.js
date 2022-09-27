let operator = "";
let previousValue = "";
let currentValue = "";
document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll(".button");
    let operators = document.querySelectorAll(".operator")
    let currentNumber = document.querySelector("#getFirstInput");
    let previousNumber = document.querySelector("#getSecondInput");
    let currentValueHolder;
    let equals = document.querySelector("#equals").addEventListener("click", operate);
    let roundButton = document.querySelector("#roundButton");
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
        let result;
        switch(operator){
            case"+":
                result = firstValue + secondValue;
                currentNumber.textContent = result;
                break;
            case"-":
                result = firstValue - secondValue;
                currentNumber.textContent = result;
                break;
            case"/":
                result = firstValue / secondValue;
                currentNumber.textContent = result;
                break;
            case"x": 
                result = firstValue * secondValue; 
                currentNumber.textContent = result;
                break;
            case"^":
                result = firstValue ** secondValue;
                currentNumber.textContent = result;
                break;
            case"%":
                result = firstValue % secondValue;
                currentNumber.textContent = result;
                break;
            default:
                result = firstValue + secondValue;
                currentNumber.textContent = result;
                break;

        } 
    }

    function deleteAll(){
        operator = "";
        previousValue = "";
        currentValue = "";
        currentNumber.textContent = "";
        previousNumber.textContent = "";

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
