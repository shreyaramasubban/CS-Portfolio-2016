// JavaScript File
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
})
