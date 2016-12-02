// JavaScript File

var addButton = document.getElementById("addButton");
var list = document.getElementById("list");
var task = document.getElementById("task");
var color = document.getElementById("color");

addButton.addEventListener('click', function (){
    var inputColor = color.value;
    var inputTask = task.value;
    list.innerHTML += "<div style = 'color:" + inputColor + "'>" + inputTask + "</div>"; 
    
});

list.addEventListener('dblclick', function(evt){
    var removeTask = evt.target;
    removeTask.parentNode.removeChild(removeTask);

});

list.addEventListener('click', function(evt){
    var strikeTask = document.getElementById("list");
    var strikeTask = evt.target;
    strikeTask.style.setProperty("text-decoration", "line-through");
});








 