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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Pushes new Pics into currentPics Array
function populatePics(){

  for(var i = 0; i < 3; i++){
    var randomPic = random(0, pics.length-1);
    while(currentPics.includes(randomPic)){
      randomPic = random(0, pics.length-1);
    }
    currentPics.unshift(randomPic);
console.log('unshift ' + randomPic);
    if(currentPics.length > 6){
      currentPics.pop(3);
    }




  //   while(lastPics.includes(randomPic)){
  //     randomPic = random(0, pics.length-1);
  //     while(currentPics.includes(randomPic)){
  //       randomPic = random(0, pics.length-1);
  //     }
  //   }
  //   
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
  if(votes===0){
    picDiv.removeEventListener('click', handleClick);
    picDiv.innerHTML='';
    // *********************trying to get the percentages to work
    var head = document.getElementById('head');
    head.innerHTML ='Thank you. Here are your stats.';
    renderChart();
    // var ulEl = document.createElement('ul');
    // picDiv.appendChild(ulEl);

    // var liEl;

    // for(var i = 0; i < pics.length; i++){
    //   liEl = document.createElement('li')
    //   liEl.textContent=`Thanks for mock-shopping with busmall!! 
    //   You chose the ${pics[i].name} product ${Math.floor(pics[i].timesClicked / pics[i].timesDisplayed*100)} % of the time it was diplayed`;
    //   ulEl.appendChild(liEl);
    // }

  }
  else{
    render();
  }
}


function renderChart(){
  var picName = [];
  var timesVoted = [];

  for(var i = 0; i<pics.length; i++){
    picName.push(pics[i].name);
    timesVoted.push(pics[i].timesClicked);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontColor = 'black';
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: picName,
      datasets: [{
        label: '# of Votes',
        data: timesVoted,
        backgroundColor: [
          'rgba(28, 28, 28, 0.8)',
          'rgba(38, 38, 38, 0.8)',
          'rgba(48, 48, 48, 0.8)',
          'rgba(58, 58, 58, 0.8)',
          'rgba(68, 68, 68, 0.8)',
          'rgba(78, 78, 78, 0.8)',
          'rgba(28, 28, 28, 0.8)',
          'rgba(38, 38, 38, 0.8)',
          'rgba(48, 48, 48, 0.8)',
          'rgba(58, 58, 58, 0.8)',
          'rgba(68, 68, 68, 0.8)',
          'rgba(78, 78, 78, 0.8)',
          'rgba(28, 28, 28, 0.8)',
          'rgba(38, 38, 38, 0.8)',
          'rgba(48, 48, 48, 0.8)',
          'rgba(58, 58, 58, 0.8)',
          'rgba(68, 68, 68, 0.8)',
          'rgba(78, 78, 78, 0.8)',
          'rgba(88, 88, 88, 0.8)',
          'rgba(98, 98, 98, 0.8)',
        ],
        borderColor: [
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
          'rgba(0,0,0)',
        ],
        borderWidth: 1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      labels:{
        legend: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    }
  });
  myChart.canvas.parentNode.style.height = '500px';
  myChart.canvas.parentNode.style.width = '800px';
}
