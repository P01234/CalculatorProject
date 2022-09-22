const numbers = Array.from(document.querySelectorAll("[data-number]"));
const operator = document.querySelectorAll("[data-operator]");
let operandGetter = "";
let operatorCheck = false;
let operatorValue1;
const leftPharentsis = document.querySelector("[data-open]");
const rightPharentisis = document.querySelector("[data-close]");
const persentageButton = document.querySelector("[data-percentage]");
const deleteButton = document.querySelector("[data-delete]");
let display
let firstOperandHolder;
let secondOperandHolder;
//get operator number and set the boolean which will be used to get the second input.
let selectOperator = (operatorGetter) =>{
    operatorValue1 = operatorGetter;
    operatorCheck = false;
}

//get user's input and send it to display.
let getOperand = (operand) =>{
    operandGetter = operand
    getDisplay(operandGetter)
}
//get operand, if operatorCheck exists then it'll get the second input.
let getDisplay = (displayOperand) =>{
    if(operatorCheck === false)
    {
        display = document.querySelector("#getInput").textContent = displayOperand
    operatorCheck = true;
    operandHolder = displayOperand
    firstOperandHolder = operandHolder
    }else if(displayOperand === "DELETE")
    {
        operandGetter = ""
        operatorCheck = ""
        display = document.querySelector("#getInput").textContent = "";

    }else
    {
        display = document.querySelector("#getInput").textContent += displayOperand
        secondOperandHolder = display;
        console.log(secondOperandHolder)
        
    }if(displayOperand === "="){
        return validateMath(operatorValue1, firstOperandHolder,secondOperandHolder)
    }
}

let validateMath = (mathValidator, firstOperandHolder,secondOperandHolder) =>{
    let firstValue = parseFloat(firstOperandHolder);
    let secondValue = parseFloat(secondOperandHolder);
    console.log(firstValue)
    console.log(secondValue)
    let result;
    switch(mathValidator){
        case"+": result = firstValue + secondValue; 
        case"-": result = firstValue + secondValue;
   }
   console.log(result);
}
numbers.forEach(button => {
    button.addEventListener("click", () => {
        getOperand(button.textContent)
        
    })
})

operator.forEach(operatorValue => {
    operatorValue.addEventListener("click", () =>{
        selectOperator(operatorValue.textContent)
    })
})