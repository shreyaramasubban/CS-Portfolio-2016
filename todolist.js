// JavaScript File

// These are the variables that are the id in the html.
var addButton = document.getElementById("addButton");
var list = document.getElementById("list");
var task = document.getElementById("task");
var color = document.getElementById("color");
var deleteColumn = document.getElementById("addcolumn");

//This is the function that lets the user add items to the list in specific colors.
addButton.addEventListener('click', function (){
    var inputColor = color.value;
    var inputTask = task.value;
    list.innerHTML += "<div style = 'color:" + inputColor + "'>" + inputTask + "</div>"; 
    
});

//This is the function that removes an item from the list when you double click it.
list.addEventListener('dblclick', function(evt){
    var removeTask = evt.target;
    removeTask.parentNode.removeChild(removeTask);

});

//This is the function that strikes through an item on the list when you single click it. 
list.addEventListener('click', function(evt){
    var strikeTask = document.getElementById("list");
    var strikeTask = evt.target;
    strikeTask.style.setProperty("text-decoration", "line-through");
});



 