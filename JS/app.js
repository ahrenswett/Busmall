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
var pics= [];


function Pic(fileName){//requires string
  this.name = fileName;
  this.filepath = `./image/${fileName}.jpg`;
  this.timesClicked;
  this.timesDisplayed;
  this.percentClicked;
  this.percentDisplayed;
  pics.push(this);
}

function displayPics(pic){
  var div = document.getElementById('picDiv');
  var img = document.createElement('img');
  img.setAttribute('id', 'pic1');
  img.setAttribute('src', `./images/${pic}`);
  img.setAttribute('alt', `${pic}`);
  div.appendChild(img);
}


new Pic('bag');
new Pic('usb');
console.log(pics);

displayPics('bag.jpg');
displayPics('usb.gif');
