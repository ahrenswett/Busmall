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
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');
var pic3 = document.getElementById('pic3');
var votes = 25;

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
    console.log(pics.length-1);
    while(currentPics.includes(randomPic)){
      randomPic = random(0, pics.length-1);
    }
    while(lastPics.includes(randomPic)){
      randomPic = random(0, pics.length-1);
      while(currentPics.includes(randomPic)){
        randomPic = random(0, pics.length-1);
      }
    }
    currentPics.push(randomPic);
  }
}


//adds an img to picDiv
function displayPics(){
  var picture = [pic1,pic2,pic3];
  for(var i = 0; i<picture.length; i++){
    picture[i].src = pics[currentPics[i]].filepath;
    picture[i].title = pics[currentPics[i]].name;
    picture[i].alt = pics[currentPics[i]].name;
    pics[currentPics[i]].timesDisplayed++;
  }
}

// Puts new images on page
function render(){
  populatePics();
  displayPics();
  console.log(`${currentPics} Is Current`);
  //Moves currentPics to lastPics and leaves currentPics empty
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

picDiv.addEventListener('click', handleClick);

function handleClick(e){
  
  var picName = e.target.title;
  
  if(e.target.id === 'picDiv')
    alert('Click A Picture');
  
  for(var j = 0; j<pics.length; j++){
    if(picName === pics[j].name){
      pics[j].timesClicked++;
      votes--;
      console.log(pics[j]);
    }
  }
  lastPics = currentPics.splice('');

  if(votes===0){
    picDiv.removeEventListener('click', handleClick);
    picDiv.innerHTML='';
    // *********************trying to get the percentages to work
    console.log(pics[1].timesClicked);
    console.log(pics[1].timesDisplayed);
    console.log(pics[1].timesDisplayed / pics[1].timesClicked);
    console.log(pics[1].timesClicked / pics[1].timesDisplayed);
    var head = document.getElementById('head');
    head.innerHTML ='Thank you. Here are your stats.';

    
    var pEl = document.createElement('p');
   
    for(var i = 0; i < pics.length; i++){
      pEl.textContent=`Thanks for mock-shopping with busmall!! 
      The ${pics[i].name} product was  displayed ${pics[i].timesDisplayed} times.
      you chose it ${pics[i].timesClicked} times
      you chose it ${Math.floor(pics[i].timesClicked / pics[i].timesDisplayed*100)}`;
      picDiv.appendChild(pEl);


  // Thanks for mock-shopping with busmall!!
    // The pics[i] product was  displayed pics[1].timesDisplayed times
    // you chose it pics[i].timesClicked times
    // you chose it pics[1].timesClicked / pics[1].timesDisplayed 
    // 
    }

  }
  render();
}

console.log(pics);
// function renderStats(){
   
// }
