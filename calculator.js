// JavaScript File
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operation = document.getElementById("operation");
var calculateButton = document.getElementById("calculateButton");
var answer = document.getElementById("answer");

calculateButton.addEventListener("click", function() {
    var inputnum1 = Number (num1.value);
    var inputnum2 = Number (num2.value);
    var inputoperation = operation.value;

    if (inputoperation == "+") {

        var ans = inputnum1 + inputnum2;

        
        alert(ans);
    }
    
        if (inputoperation == "-") {

        var ans = inputnum1 - inputnum2;

        
        alert(ans);
    }
    
        if (inputoperation == "x") {

        var ans = inputnum1 * inputnum2;

        
        alert(ans);
    }
   
    if (inputoperation == "/") {

        var ans = inputnum1 / inputnum2;

        
        alert(ans);
    }
});
