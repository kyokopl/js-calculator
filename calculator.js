var screenDisplay = '';
var temp = '';

function clickNum(i) { 
    checkForNewCalculation();
    displayNum(i);
}

// Display number on screen
function displayNum(i) {
    document.getElementById("screen").value += i;
    temp += i;
}

// Check for new calculation
function checkForNewCalculation() {
    screenDisplay = document.getElementById("screen").value;
    if (document.getElementById("screen").classList.contains("result")){
        allClear();
        document.getElementById("screen").classList.remove("result");
    };
}

// Clear for C
function clearScreen() {
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
}

// Clear for AC
function allClear() {
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
    temp ="";
}

// Performing calculations
function maths(i) {
    screenDisplay =document.getElementById("screen");
    if (document.getElementById("screen").classList.contains("result")){
        temp = screenDisplay.value;
        screenDisplay.classList.remove("result");
    };
    clearScreen();
    temp += i;
}

// Result 
function equal() {
    screenDisplay = document.getElementById("screen");
    temp = eval(temp);
    document.getElementById("screen").value = temp;
    screenDisplay.classList.add("result");
}
