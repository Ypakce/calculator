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

clearButton.addEventListener("click", () => {
    currentResult.textContent = "";
    previousResult.textContent = "";
    previousAns = "";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
})

backButton.addEventListener("click", () => {
    let str = currentResult.textContent;
    currentResult.textContent = str.slice(0,-1);
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
            const integerDigit = parseFloat(currentAns.split(".")[0]);
            const decimalDigit = currentAns.split(".")[1];
            if(decimalDigit != null){
                currentAns = `${integerDigit}.${decimalDigit}`;
            }
            else{
                currentAns = integerDigit;
            }
            currentResult.textContent = currentAns;
        }
    })
})

opeButtons.forEach(opeButton => {
    opeButton.addEventListener("click", () => {
        if(operator != undefined){
            num2 = currentResult.textContent;
            let result;
            result = operate(operator, parseFloat(num1), parseFloat(num2));
            result = roundResult(result);
            previousResult.textContent = result.toString();
            currentResult.textContent = "";
            num1 = result;
            num2 = undefined;
            previousAns = "";
            operator = opeButton.textContent;
        }
        else{
            num1 = currentResult.textContent;
            operator = opeButton.textContent;
            previousResult.textContent = num1 + " " + operator;
            currentResult.textContent = "";
            previousAns = "";
        }
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
        result = roundResult(result);
        currentResult.textContent = result.toString();
        previousResult.textContent = "";
        previousAns = "";
        num2 = undefined;
        operator = undefined;
    }
})

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
        return "";
    }
    else{
        return num1 / num2;
    }
}

function operate(operator, num1, num2){
    let res;
    switch(operator){
        case "+":
            res = add(num1, num2);
            break;
        case "-":
            res = subtract(num1, num2);
            break;
        case "*":
            res = multiply(num1, num2);
            break;
        case "/":
            res = divide(num1, num2);
            break;
    }
    return res;
}

function roundResult(number) {
    return Math.round(number * 10000) / 10000;
  }