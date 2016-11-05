'use strict';

var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');

var totalClicks = 0;
var clickLim = 25;

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

function Image(imgName , filePath){
  console.log('Image', imgName);
  this.imgName = imgName;
  this.filePath = filePath;
  this.shown = 0;
  this.clicks = 0;
};

function randomNumbGenerator(){
  return parseInt(Math.random() * arrayAllImg.length);
};

var oldIdx = [];

function getRandomImgs(event){
  totalClicks++;
  if (event){
    var clickedImgIdx = parseInt(event.target.alt);
    arrayAllImg[clickedImgIdx].clicks++;
  }

  var imgTag = document.getElementsByClassName('clickable');

  var randomIdx = [];

  for (var i = 0; i < imgTag.length; i++){
    var idx = randomNumbGenerator();
    while (randomIdx.indexOf(idx) !== -1 || oldIdx.indexOf(idx) !== -1){
      idx = randomNumbGenerator();
    }

    randomIdx[i] = idx;
  }

  oldIdx = randomIdx;

  var productsToBeDisplayed = [];
  for (var i = 0; i < randomIdx.length; i++){
    var thisIdx = randomIdx[i];
    productsToBeDisplayed[i] = arrayAllImg[thisIdx];
    arrayAllImg[thisIdx].shown++;
  }

  for (var i = 0; i < imgTag.length; i++){
    imgTag[i].setAttribute('src' , productsToBeDisplayed[i].filePath);
    imgTag[i].setAttribute('alt' , randomIdx[i]);
  }

  localStorage.setItem('arrayAllImg', JSON.stringify(arrayAllImg));

  if (totalClicks >= clickLim) {{
    var showButton = document.getElementById('button');
    showButton.setAttribute('id' , 'appear');
    var hidePics = document.getElementById('sectionOne');
    hidePics.setAttribute('id' , 'sectionTwo');
  }
    localStorage.setItem('arrayAllImg', JSON.stringify(arrayAllImg));
    for (var i = 0; i < imgTag.length; i++) {
      imgTag[i].removeEventListener('click' , getRandomImgs);

    }
    {
    }

    var Data = document.getElementById('appear');
    Data.addEventListener('click' , drawChart);
    Data.addEventListener('click' , drawTable);

  }
}

getRandomImgs();
totalClicks--;

var imgTag = document.getElementsByClassName('clickable');
for (var i = 0; i < imgTag.length; i++) {
  imgTag[i].addEventListener('click' , getRandomImgs);
}

function drawTable() {
  var table = document.getElementById('table');
  var trNames = document.createElement('tr');
  table.appendChild(trNames);

  var makeRow = function(newRow , rowMsg , makeLine){
    var newRow = document.createElement('th');
    newRow.innerText = rowMsg;
    makeLine.appendChild(newRow);
  };

  var thBlank = makeRow('blankRow' , '' , trNames);
  var namesBlank = document.createElement('th');
  namesBlank.innerText = '';
  trNames.appendChild(namesBlank);
  for (var i = 0; i < arrayAllImg.length; i++) {
    var thNames = document.createElement('th');
    thNames.setAttribute('id' , 'thNames');
    thNames.innerText = arrayAllImg[i].imgName;
    trNames.appendChild(thNames);
  }

  var tr2 = document.createElement('tr');
  table.appendChild(tr2);
  var thClicks = makeRow('clickRow' , 'Clicks' , tr2);
  var clicksBlank = document.createElement('td');
  clicksBlank.innerText = '';
  tr2.appendChild(clicksBlank);
  for (var i = 0; i < arrayAllImg.length; i++) {
    var td = document.createElement('td');
    td.setAttribute('id' , 'tdClicks');
    td.innerText = arrayAllImg[i].clicks;
    tr2.appendChild(td);
  }

  var trShown = document.createElement('tr');
  table.appendChild(trShown);
  var thShown = makeRow('shownRow' , 'Shown' , trShown);
  var shownBlank = document.createElement('td');
  shownBlank.innerText = '';
  trShown.appendChild(shownBlank);
  for (var i = 0; i < arrayAllImg.length; i++) {
    var td = document.createElement('td');
    td.setAttribute('id' , 'tdShown');
    td.innerText = arrayAllImg[i].shown;
    trShown.appendChild(td);
  }
  var trRate = document.createElement('tr');
  table.appendChild(trRate);
  var thPercent = makeRow('rateRow' , 'Click Rate' , trRate);
  var rateBlank = document.createElement('td');
  rateBlank.innerText = '';
  trRate.appendChild(rateBlank);
  for (var i = 0; i < arrayAllImg.length; i++) {
    var td = document.createElement('td');
    td.setAttribute('id' , 'tdRate');
    if (arrayAllImg[i].shown === 0 || arrayAllImg[i].clicks === 0)
      for (var i = 0; i < arrayAllImg.length; i++) {
        td.innerText = '--';
        trRate.appendChild(td);
        console.log('na' , td.innerText);
      } else {
      td.innerText = (Math.floor(arrayAllImg[i].clicks / arrayAllImg[i].shown * 100) + '%');
      trRate.appendChild(td);
      console.log('percent' , td.innerText);
    }
  }
}
