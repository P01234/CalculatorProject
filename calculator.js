const buttons = Array.from(document.getElementsByClassName("button"));
//get every item  defined as a class named button, by using it one can make a array out of those nodes
whichDidIPress()
function whichDidIPress()   {
buttons.forEach(button => {
    button.addEventListener("click", () =>
    {   //get a lot of inputs

        arrayResult = button.textContent
        return getInputFunc(arrayResult);
    })
})
}

function getInputFunc(inputReceive) {
    //concatenates the value + the giving input
    if(inputReceive == 'DELETE'){
        inputReceive = "";
        document.querySelector("#getInput").value = "" ;
    }
   let displayContent = document.querySelector("#getInput").value += inputReceive ;
    return validateDisplay(displayContent);
}

function validateDisplay(displayContent){
  
}