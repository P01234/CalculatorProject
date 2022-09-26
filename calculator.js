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
            currentValueHolder = currentNumber.textContent += currentValue + ","
        }
        else{
            displayUpdate();
        }
    }



    let displayUpdate = function(){
        if(previousValue === ""){
            previousNumber.textContent += currentValueHolder;
            previousValue = currentValue;
            currentValue = "";
            currentNumber.textContent = currentValueHolder+operator;
        }else if(previousValue !== ""){
            previousValue = currentValue;
            console.log("PAPAGAIO!")
            currentValue = "";
            currentNumber.textContent += `${previousValue}`;
        }
    }

    function operate(){
        let firstValue = parseFloat(currentNumber.textContent);
        let secondValue = parseFloat(previousValue);
        console.log(firstValue + "alface!" + secondValue)
        let result;
        switch(operator){
            case"+":
                result = firstValue + secondValue
                currentNumber.textContent = result;
            case"-":
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
