// var display = document.querySelector("#result");

// function appendValue(value){
//     display.value += value;
// }

// function clearValue(){
//     display.value = "";
// }

// function deleteLast(){
//     display.value = display.value.slice(0,-1);
// }

// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch{
//         display.value = "Error";
//     }
// }

// document.querySelectorAll(".btn").forEach(button => {
//     button.addEventListener('click', (e) => {
//         const value = e.target.innerText;

//         if(value === 'C'){
//             clearValue();
//         }
//         else if(value === '⌫'){
//             deleteLast();
//         }
//         else if(value === '='){
//             calculate();
//         }
//         else{
//             appendValue(value);
//         }
//     })
// })
// ,
// document.addEventListener("keydown",function (event) {
//     const key = event.key; 

//     if (key === 'C') {
//         clearValue();
//     } else if (key === '⌫') {
//         deleteLast();
//     } else if (key === '=') {
//         calculate();
//     } else if (!isNaN(key) || "+-*/.".includes(key)) {
//         appendValue(key);
//     } else {
//         console.log("Invalid key pressed:", key);
//     }
// })



const display = document.querySelector("#result");

function appendValue(value) {
    if (display.value === "Error") display.value = ""; // Clear error before appending
    display.value += value;
}

function clearValue() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const sanitizedExpression = display.value.replace("÷", "/").replace("×", "*");
        display.value = eval(sanitizedExpression);
    } catch {
        display.value = "Error";
    }
}

// Button Click Events
document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (value === "C") {
            clearValue();
        } else if (value === "⌫") {
            deleteLast();
        } else if (value === "=") {
            calculate();
        } else if (value === "CE") {
            clearValue();
        } else {
            appendValue(value);
        }
    });
});

// Keyboard Events
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "Backspace") {
        deleteLast();
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Escape") {
        clearValue();
    } else if (!isNaN(key) || "+-*/.".includes(key)) {
        appendValue(key);
    } else if (key === "/") {
        appendValue("÷");
    } else if (key === "*") {
        appendValue("×");
    } else {
        console.log("Invalid key pressed:", key);
    }
});

