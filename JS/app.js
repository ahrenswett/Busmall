'use strict';



/* 
selects three random photos
displays them side by side
each image registers clicks, track the clicks return percentage
upon a click three new images should appear

construct an array of picture objects
    function that loops over contents of a given folder
    each file is pushed through the constructor
        constructor that holds
            name
            timesClicked
            timesDisplayed
            percentClicked
            percentDisplayed

choose three pics at random form pics array
    function that limits math. random to length of chosen array
    for loop that iteragtes through math.random 3 times
    each time pushing the corresponding oject to currentPics array.
    timesDisplayed is incremented for each object in array
        Pics are then pushed to DOM

When a picture is clicked
    timesClicked propety for that object increments
    the whole array is pushed to a new array called lastPics

function to check to see what pics lastPics contains
function to genetrate new currentPics exculding any pics in lastPics
after 25 iterations event listener is turned off
function that calculates pecentage clicked and percentage displayed is called

    ****** timesClicked/timesDisplayed = pecentClicked
    ****** timedDSisplayed/25 = percentDisplayed


*/
var pics = [];

//Object Constructor
function Pic(fileName, fileType){//requires string
  this.name = fileName;
  this.filepath = `./image/${fileName}.${fileType}`;
  this.timesClicked;
  this.timesDisplayed;
  this.percentClicked;
  this.percentDisplayed;
  pics.push(this);
}






// //adds an img to picDiv
// function displayPics(fileName, fileType){
//   var div = document.getElementById('picDiv');
//   var img = document.createElement('img');
//   img.setAttribute('id', 'pic1');
//   img.setAttribute('src', `./images/${fileName}.${fileType}`);
//   img.setAttribute('alt', `${fileName}`);
//   div.appendChild(img);
// }


// for(var i = 0; i < pics.length; i++){

// }

new Pic('bag', 'jpg');
new Pic('banana', 'jpg');
new Pic('bathroom', 'jpg');
new Pic('boots', 'jpg');
new Pic('breakfast', 'jpg');
new Pic('bubblegum', 'jpg');
new Pic('chair', 'jpg');
new Pic('cthulhu', 'jpg');
new Pic('dog-duck', 'jpg');
new Pic('dragon', 'jpg');
new Pic('pen', 'jpg');
new Pic('pet-sweep', 'jpg');
new Pic('scissors', 'jpg');
new Pic('shark', 'jpg');
new Pic('sweep', 'jpg');
new Pic('tauntaun', 'jpg');
new Pic('unicorn', 'jpg');
new Pic('usb', 'gif');
new Pic('water-can', 'jpg');
new Pic('wine-glass', 'jpg');

console.log(pics);

// displayPics('bag.jpg');
// displayPics('usb.gif');


