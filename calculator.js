const numbers = Array.from(document.querySelectorAll("[data-number]"));
const operator = document.querySelectorAll("[data-operator]");
let operandGetter = "";
let operatorCheck = false;
const leftPharentsis = document.querySelector("[data-open]");
const rightPharentisis = document.querySelector("[data-close]");
const persentageButton = document.querySelector("[data-percentage]");
const deleteButton = document.querySelector("[data-delete]");
let display
//get operator number and set the boolean which will be used to get the second input.
let selectOperator = (operatorGetter) =>{
    let operatorValue = operatorGetter;
    operatorCheck = false;
    return validateMath(operatorValue);
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
    let firstOperandHolder = display;
    }else if(displayOperand === "DELETE")
    {
        operandGetter = ""
        operatorCheck = ""
        display = document.querySelector("#getInput").textContent = "";

    }else
    {
        display = document.querySelector("#getInput").textContent += displayOperand
        let secondOperandHolder = display;
        console.log(secondOperandHolder)
    }
}

let validateMath = (mathValidator) =>{
    switch(mathValidator){

    }
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