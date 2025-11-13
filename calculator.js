
let numberOne;
let numberTwo;
let operator;

let result = document.querySelector(".result");
result.textContent = ""

let resultStart = document.querySelector(".result-start");

const buttons = document.querySelectorAll(".numbers button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        resultStart.remove();

        if (button.textContent == "clear"){
            location.reload();
        } else {
            const value = button.textContent.trim()
            result.append(value);}
    })
});

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