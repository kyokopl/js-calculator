var display = "";
var temp = "";

function clickNum(i) { 
    displayNum(i);
}

// Display number on screen
function displayNum(i) {
    document.getElementById("screen").value += i;
    temp += i;
}

// Clear for C
function clearScreen() {
    display = "";
    document.getElementById("screen").value = display;
}

// Clear for AC
function allClear() {
    display = "";
    document.getElementById("screen").value = display;
    temp = "";
}

// Performing calculations
function maths(i) {
    display =document.getElementById("screen");
    if (document.getElementById("screen").classList.contains("result")){
        temp = display.value;
        display.classList.remove("result");
    };
    clearScreen();
    temp += i;
}

// Result 
function equal() {
    display = document.getElementById("screen");
    temp = eval(temp);
    document.getElementById("screen").value = temp;
    display.classList.add("result");
}
