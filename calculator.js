let operator = "";
let previousValue = "";
let currentValue = "";
let actual;
document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll(".button");
    let operators = document.querySelectorAll(".operator")
    let currentNumber = document.querySelector("#getFirstInput");
    let previousNumber = document.querySelector("#getSecondInput");
    let equals = document.querySelector("#equals").addEventListener("click", operate);
    let roundButton = document.querySelector("#roundButton");
    let deleteNumber = document.querySelector("#delete").addEventListener("click", deleteAll);

    let defineOpe = function(operatorGet){
        operator = operatorGet;
    }

    let getNumber = function(number){
        currentValue = number;
        if(operator === ""){
        currentNumber.textContent += currentValue;
        }else if(currentNumber.textContent.includes(".")){
            currentNumber.textContent += currentNumber + ","
        }
        else{
            displayUpdate();
        }
    }



    let displayUpdate = function(){
        if(previousValue === ""){
            previousValue = currentValue;
            currentValue = "";
            previousNumber.textContent = currentNumber.textContent+operator;
        }else if(previousValue !== ""){
            previousValue = "";
            previousValue = currentValue;
            currentValue = "";
            previousNumber.textContent += `${previousValue}`;
        }
    }

    function operate(){
        let firstValue = parseFloat(currentNumber.textContent);
        let secondValue = parseFloat(previousNumber.textContent);
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

    console.log(operator)


});