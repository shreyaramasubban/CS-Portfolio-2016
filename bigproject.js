// JavaScript File
var showAnswersButton = document.getElementById("showAnswersButton");
var q1 = document.getElementById("q1");
var ans1;
var ans2;
var ans3;
var ans4;
var ans5;
var ans6;
showAnswersButton.addEventListener('click', function () {
    if (ans1 == "a") {
        alert("Well done! Jasmine's tiger's name is Rajah!")

    }
    else {
        alert("Sorry! Please try again...")

    }

    if (ans2 == "c") {
        alert("Well done! Snow White was the first Disney princess movie made in 1938!")
    }
    else {
        alert("Sorry! Please try again...")
    }
  if (ans3 == "c") {
        alert("Well done! Dumbo is the only main character in a Disney film that doesn't speak!")
    }
    else {
        alert("Sorry! Please try again...")
    }
    
    if (ans4 == "b") {
        alert("Well done! Beauty and the Beast was the first Disney movie to be nominated for an Oscar!")
    }
    else {
        alert("Sorry! Please try again...")
    }
      if (ans5 == "d") {
        alert("Well done! Rapunzel has magic healing hair!")
    }
    else {
        alert("Sorry! Please try again...")
    }
       if (ans6 == "b") {
        alert("Well done! Kanga is the only female in Winnie the Pooh!")
    }
    else {
        alert("Sorry! Please try again...")
    }

});


function getAnswer(que, ans){
    if(que === 1){
        ans1 = ans;
    }
    if (que === 2) {
        ans2 = ans;
    }
     if (que === 3) {
        ans3 = ans;
    }
     if (que === 4) {
        ans4 = ans;
    }
    if (que === 5) {
        ans5 = ans;
    }
     if (que === 6) {
        ans6 = ans;
    }
}