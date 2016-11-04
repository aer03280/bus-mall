'use strict';

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var totalClicks = 0;
var clickLim = 3;

var holder = JSON.parse(localStorage.getItem('arrayAllImg'));
console.log(holder);
var arrayAllImg;
if (localStorage.getItem('arrayAllImg')) {
  var arrayAllImg = JSON.parse(localStorage.getItem('arrayAllImg'));
} else {
  var arrayAllImg = [
    new Image('bag' , 'assets/bag.jpg'),
    new Image('banana' , 'assets/banana.jpg'),
    new Image('bathroom' , 'assets/bathroom.jpg'),
    new Image('boots' , 'assets/boots.jpg'),
    new Image('breakfast' , 'assets/breakfast.jpg'),
    new Image('bubblegum' , 'assets/bubblegum.jpg'),
    new Image('chair' , 'assets/chair.jpg'),
    new Image('cthulhu' , 'assets/cthulhu.jpg'),
    new Image('dog duck' , 'assets/dog-duck.jpg'),
    new Image('dragon' , 'assets/dragon.jpg'),
    new Image('pen' , 'assets/pen.jpg'),
    new Image('pet sweep' , 'assets/pet-sweep.jpg'),
    new Image('scissors' , 'assets/scissors.jpg'),
    new Image('shark' , 'assets/shark.jpg'),
    new Image('sweep' , 'assets/sweep.png'),
    new Image('tauntaun' , 'assets/tauntaun.jpg'),
    new Image('unicorn' , 'assets/unicorn.jpg'),
    new Image('usb' , 'assets/usb.gif'),
    new Image('water can' , 'assets/water-can.jpg'),
    new Image('wine glass' , 'assets/wine-glass.jpg'),
  ];

}

// Constructor to make an array of all image objects
function Image(imgName , filePath){
  console.log('Image', imgName);
  this.imgName = imgName;
  this.filePath = filePath;
  this.shown = 0;
  this.clicks = 0;
};

  // function to generate a random number from the length of the array containing all images
function randomNumbGenerator(){
  return parseInt(Math.random() * arrayAllImg.length);
};

// set the variable for indice array of images alraedy clicked
var oldIdx = [];

// Make an array of clicked images and Inc the tally of clicks on the img's position[i] within that array, if the img was already picked then draw again
function getRandomImgs(event){
  totalClicks++;
  if (event){
    var clickedImgIdx = parseInt(event.target.alt);
    arrayAllImg[clickedImgIdx].clicks++;
  }

    // get all the imgTag that have the class of clickable
  var imgTag = document.getElementsByClassName('clickable');
  // this array holds the random indexes
  var randomIdx = [];

    // for each div to fill with an img, genterate a random index position. The imgTag length depends on how many className 'clickable' elements are listed in html
  for (var i = 0; i < imgTag.length; i++){
    var idx = randomNumbGenerator();
    while (randomIdx.indexOf(idx) !== -1 || oldIdx.indexOf(idx) !== -1){
        // check for duplicate displayed imgages on same draw or if the image was just seen...run function again to pick a diff image
      idx = randomNumbGenerator();
    }

    // generate a # to represent the position in the array
    randomIdx[i] = idx;
  }

  // kept the newly generated Idx to compare for duplicates on the next click
  oldIdx = randomIdx;

    // create a variable for an array of items to be displayed and once it has been displayed then increase the number of times shown.
  var productsToBeDisplayed = [];
  for (var i = 0; i < randomIdx.length; i++){
    var thisIdx = randomIdx[i];
    productsToBeDisplayed[i] = arrayAllImg[thisIdx];
    arrayAllImg[thisIdx].shown++;
    // console.log('incrementing times shown for ', arrayAllImg[thisIdx]);
  }

    // Loop through the imgTag in html and find the tags to fill the src with the filePath and the and the index of that corresponding product in the 'alt' attribute of the img.
    // according to the random position in the array, fill the src of the imgTag with a filePath and store the index corresponding to that product in the 'alt' attribute of the image.

  for (var i = 0; i < imgTag.length; i++){
    imgTag[i].setAttribute('src' , productsToBeDisplayed[i].filePath);
    imgTag[i].setAttribute('alt' , randomIdx[i]);
  }

    // Remove event handler when clickLim is reached
  localStorage.setItem('arrayAllImg', JSON.stringify(arrayAllImg));

  if (totalClicks >= clickLim) {

    localStorage.setItem('arrayAllImg', JSON.stringify(arrayAllImg));
    for (var i = 0; i < imgTag.length; i++) {
      imgTag[i].removeEventListener('click' , getRandomImgs);
    }
    drawChart();
    drawTable();
  }
    // var holder = JSON.parse(localStorage.getItem('arrayAllImg'));
    // console.log(holder);
    // console.log(holder[0].shown);

  // for (var i = 0; i < holder.length; i++) {
  //   var td = document.createElement('td');
  //   td.innerText = holder[i].clicks;
  //   td.setAttribute('id' , 'tdId');
  //   tr2.appendChild(td);
  // }
      // select the id click-info in html and create unordered list as a child element below it
  // var clickInfo = document.getElementById('click-info');
  // var ul = document.createElement('ul');
  // clickInfo.appendChild(ul);
  //
  //   // for each of the images, list its clicked and shown info
  // for (var i = 0; i < arrayAllImg.length; i++) {
  //   var thisImage = arrayAllImg[i];
  //   var li = document.createElement('li');
  //   var fillerInfo = '';
  //   fillerInfo += thisImage.imgName;
  //   if (thisImage.shown === 0){
  //     fillerInfo += ' | Click Rate: None';
  //   } else {
  //     console.log('NAME:  ', thisImage.imgName);
  //     console.log('thisImage.clicks: ', thisImage.clicks);
  //     console.log('thisImage.shown: ', thisImage.shown);
  //     fillerInfo += ' | Click Rate: ' + (thisImage.clicks / thisImage.shown * 100) + '%';
  //   }
  //   li.innerText = fillerInfo;
  //   ul.appendChild(li);
  // }
}

getRandomImgs();
// compensating for the extra click added by calling the above function when page initially loads
totalClicks--;

// event listener for clicks - call the getRandomImgs function when someone clicks on an imgTag item
var imgTag = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTag.length; i++) {
  imgTag[i].addEventListener('click' , getRandomImgs);
}

function drawTable() {
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  table.appendChild(tr);
  for (var i = 0; i < arrayAllImg.length; i++) {
    var td = document.createElement('td');
    td.setAttribute('id' , 'td2Id');
    td.innerText = arrayAllImg[i].shown;
    tr.appendChild(td);
  }
  var tr2 = document.createElement('tr');
  table.appendChild(tr2);
  for (var i = 0; i < arrayAllImg.length; i++) {
    var td = document.createElement('td');
    td.innerText = arrayAllImg[i].clicks;
    tr2.appendChild(td);
  }
}
