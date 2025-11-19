
let numberOne;
let numberTwo;
let operator;

let result = document.querySelector(".result");
result.textContent = ""

let resultStart = document.querySelector(".result-start");

const numbBtns = document.querySelectorAll(".numbers button");
numbBtns.forEach(numbBtn => {
    numbBtn.addEventListener("click", () => {
        resultStart.remove();

        if (numbBtn.textContent == "clear"){
            location.reload();
        } else {
            const value = numbBtn.textContent.trim()
            result.append(value);}
    })
});

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        if(operatorBtn.classList.contains("divide") == true){
            const operatorText = document.createElement("div")
            operator.textContent = "÷";
            result.append(operatorText);

        } else if(operatorBtn.classList.contains("multiply") == true){
            const operatorText = document.createElement("div")
            operator.textContent = "×";
            result.append(operatorText);

    }   else if(operatorBtn.classList.contains("sub") == true){
            const operatorText = document.createElement("div")
            operator.textContent = "–";
            result.append(operatorText);

    } else if (operatorBtn.classList.contains("add") == true) {
            const operatorText = document.createElement("div")
            operator.textContent = "+";
            result.append(operatorText);
    }})

})

const equals = document.querySelector(".equals");
equals.addEventListener("click", () =>{
    operate();
})




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
        add(numberOne, numberTwo);
    } else if (operator = "-"){
        substract(numberOne, numberTwo);
    } else if (operator = "*"){
        multiply(numberOne, numberTwo);
    } else if (operator = "/"){
        divide(numberOne, numberTwo)
    }
}