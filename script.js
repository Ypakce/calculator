let num1 = undefined;
let num2 = undefined;
let operator = undefined;
let previousAns = "";

const numButtons = Array.from(document.querySelectorAll(".num"));
const currentResult = document.querySelector(".currentResult");
const previousResult = document.querySelector(".previousResult");
const clearButton = document.querySelector("#clear");
const backButton = document.querySelector("#back");
const opeButtons = Array.from(document.querySelectorAll(".ope"));
const equalButton = document.querySelector(".equal");

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 == 0){
        alert("Can't divide by zero");
        return;
    }
    return num1 / num2;
}

function operate(operator, num1, num2){
    let res;
    if(operator == "+"){
        res = add(num1, num2);
    }
    if(operator == "-"){
        res = subtract(num1, num2);
    }
    if(operator == "*"){
        res = multiply(num1,num2);
    }
    if(operator == "/"){
        res = divide(num1,num2);
    }
    return res;
}

clearButton.addEventListener("click", () => {
    currentResult.textContent = "";
    previousResult.textContent = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
})

backButton.addEventListener("click", () => {
    currentResult.textContent = previousAns;
})

numButtons.forEach(numButton => {
    numButton.addEventListener("click", () => {
        previousAns = currentResult.textContent.toString();
        let num = numButton.textContent.toString();
        if(num === "." && previousAns.includes(".")){
            return;
        }
        else{
            let currentAns = previousAns + num;
            currentResult.textContent = currentAns;
        }
    })
})

opeButtons.forEach(opeButton => {
    opeButton.addEventListener("click", () => {
        num1 = currentResult.textContent;
        operator = opeButton.textContent;
        previousResult.textContent = num1 + " " + operator;
        currentResult.textContent = "";
    })
})

equalButton.addEventListener("click", () => {
    if(num1 == undefined || operator == undefined){
        return;
    }
    else{
        num2 = currentResult.textContent;
        let result;
        result = operate(operator, parseFloat(num1), parseFloat(num2));
        previousResult.textContent = result.toString();
        currentResult.textContent = "";
        num2 = undefined;
        operator = undefined;
    }
})