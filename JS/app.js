'use strict';



/* 
***selects three random photos
CSS______displays them side by side
each image registers clicks, track the clicks return percentage
upon a click three new images should appear


******chooses three pics at random form pics array
        function that limits math. random to length of chosen array
        for loop that iteragtes through math.random 3 times
        each time pushing the corresponding oject to currentPics array.
        
        

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
var currentPics = [];
var lastPics = [];
var picDiv = document.getElementById('picDiv');

//Object Constructor: constructs an array of picture objects
//  function that loops over contents of a given folder
//      each file is pushed through the constructor
//         constructor that holds
//             name
//             timesClicked
//             timesDisplayed
//             percentClicked
//             percentDisplayed

function Pic(fileName, fileType){//requires string
  this.name = fileName;
  this.filepath = `./images/${fileName}.${fileType}`;
  this.timesClicked = 0;
  this.timesDisplayed = 0;
  this.percentClicked = 0;
  this.percentDisplayed = 0;
  pics.push(this);
}

//Random number generator
function random(min, max){
  return Math.floor(Math.random() * (min + max-1 ) + min );
}

//Pushes new Pics into currentPics Array
function populatePics(){
  for(var i = 0; i < 3; i++){
    var randomPic = random(0, pics.length-1);
    console.log(`${randomPic} is random pic`);
    console.log(`${currentPics} Is Current`);
    while(currentPics.includes(randomPic)){
      randomPic = random(0, pics.length-1);
      console.log(`${randomPic} first while is random pic`);
      while(lastPics.includes(randomPic)){
        randomPic = random(0, pics.length-1);
        console.log(`${randomPic} 2nd while is random pic`);
      }
    }
    while(lastPics.includes(randomPic)){
      randomPic = random(0, pics.length-1);
      console.log(`${randomPic} 2nd while is random pic`);
    }
    currentPics.push(randomPic);
    pics[randomPic].timesDisplayed++;
    // console.log(currentPics);
    // console.log(`${pics[randomPic].timesDisplayed++} I am times diplayed ${pics[randomPic].name}`);
  }

  // console.log(currentPics);
}

//adds an img to picDiv
function displayPics(){
  // document.getElementById('picDiv').innerHTML='';
  for(var i = 0 ; i < currentPics.length; i++){
    var img = document.createElement('img');
    img.setAttribute('id', `pic${[i+1]}`);
    img.setAttribute('src', `${pics[currentPics[i]].filepath}`);
    img.setAttribute('alt', `${pics[currentPics[i]].name}`);
    picDiv.appendChild(img);
  }
}

// Puts new images on page
function render(){
  populatePics();
  displayPics();
  console.log(`${currentPics} Is Current`);
  //Moves currentPics to lastPics and leaves currentPics empty
  lastPics = currentPics.splice('');
  console.log(`${currentPics} Is Current`);
  console.log(`${lastPics} Is last`);
}



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
new Pic('sweep', 'png');
new Pic('tauntaun', 'jpg');
new Pic('unicorn', 'jpg');
new Pic('usb', 'gif');
new Pic('water-can', 'jpg');
new Pic('wine-glass', 'jpg');
console.log(pics);


render();

// loops to count how many inputs have been taken.
// for(var i = 24; i > 0; i--){
  // listens for a click in the pic div determins which pic was clicked and increments timesClicked in the pics property
  // clears the div
  // renders new pics
  picDiv.addEventListener('click', function(){
    var picName = event.target.title;
    for(var j = 0; j<pics.lenght; j++){
      if(picName === pics[j].name){
        pics[j].timesClicked++;
      }
    }
    picDiv.innerHTML='';
    render();
  });
// }

console.log(pics);




