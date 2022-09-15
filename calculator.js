const buttons = Array.from(document.getElementsByClassName("button"));
//get every item  defined as a class named button, by using it one can make a array out of those nodes
let firstIn = undefined;
let secondIn = undefined;
let thirdIn = undefined
whichDidIPress()
function whichDidIPress()   {
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        firstIn = button.textContent
    })
})
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        secondIn = button.textContent
    })
})
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        thirdIn = button.textContent
    })
})
return getInputFunc(firstIn, secondIn, thirdIn)
}

function getInputFunc(inputReceiveF, inputReceiveS, inputReceiveT) {
    document.querySelector("#getInput").value = inputReceiveF + " " + inputReceiveS + " " + inputReceiveT;
}