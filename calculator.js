// JavaScript File
//These variables each correspond to the id given in the html.
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operation = document.getElementById("operation");
var calculateButton = document.getElementById("calculateButton");
var answer = document.getElementById("answer");

//This is the function that sets the user input to its value. 
//This function calculates the answer for each operation.
calculateButton.addEventListener("click", function() {
    var inputnum1 = Number (num1.value);
    var inputnum2 = Number (num2.value);
    var inputoperation = operation.value;

//These statements calculate the answer for each operation. 
    
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
    
//In this statement, inputnum1 is the base and inputnum2 is the power.    
    if (inputoperation == "power of") {

        var ans = Math.pow(inputnum1,inputnum2);

        
        alert(ans);
    }
    
    if (inputoperation == "square root") {

        var ans = Math.sqrt(inputnum1);

        
        alert(ans);
    }
    
});
