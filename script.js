let num1;
let num2;
let operator;

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

console.log(operate("*", 10, 25));