
let numberOne;
let numberTwo;
let operator;


// Basic operations
function add(x, y) {
    const result = x + y;
    console.log(result);
}

function substract(x, y){
    const result = x - y;
    console.log(result);
}

function multiply(x, y){
    const result = x * y;
    console.log(result);
}

function divide(x, y){
    const result = x / y;
    console.log(result);
}

// Calculation
function operate(numberOne, operator, numberTwo){
    if(operator = "+"){
        add();
    } else if (operator = "-"){
        substract();
    } else if (operator = "*"){
        multiply();
    } else if (operator = "/"){
        divide()
    }
}