'use strict';

// var arrayAllImg = [
//   new Image('bag' , 'assets/bag.jpg'),
//   new Image('bathroom' , 'assets/bathroom.jpg'),
//   new Image('boots' , 'assets/boots.jpg'),
//   new Image('breakfast' , 'assets/breakfast.jpg'),
//   new Image('bubblegum' , 'assets/bubblegum.jpg'),
//   new Image('chair' , 'assets/chair.jpg'),
//   new Image('cthulhu' , 'assets/cthulhu.jpg'),
//   new Image('dog duck' , 'assets/dog-duck.jpg'),
//   new Image('dragon' , 'assets/dragon.jpg'),
//   new Image('pen' , 'assets/pen.jpg'),
//   new Image('pet sweep' , 'assets/pet-sweep.jpg'),
//   new Image('scissors' , 'assets/scissors.jpg'),
//   new Image('shark' , 'assets/shark.jpg'),
//   new Image('sweep' , 'assets/sweep.jpg'),
//   new Image('tauntaun' , 'assets/tauntaun.jpg'),
//   new Image('unicorn' , 'assets/unicorn.jpg'),
//   new Image('usb' , 'assets/usb.jpg'),
//   new Image('water can' , 'assets/water-can.jpg'),
//   new Image('wine glass' , 'assets/wine-glass.jpg'),
// ];
// var arrayAllImg = [];
//
// // Constructor to make an array of all image objects
// function Image (imgName , filePath){
//   this.imgName = imgName;
//   this.filePath = filePath;
//   this.shown = 0;
//   this.clicked = 0;
//   arrayAllImg.push(this);
// };
//
// // place function here to run the below (eventhandler)
// function loadImage(){
//
//   // function to generate a random number from the length of the array containing all images
//   function randomNumbGenerator(){
//     var randomNumb = parseInt(Math.random() * arrayAllImg.length);
//     return randomNumb;
//   };
//
//   // provides randomly generated number from randomNumbGenerator function
//   var randomGenOne = randomNumbGenerator();
//   var randomGenTwo = randomNumbGenerator();
//   var randomGenThree = randomNumbGenerator();
//
//   // places randomly generated number into arrayAllImg to pick img from the array
//   var displayImgOne = arrayAllImg[randomGenOne];
//   var displayImgTwo = arrayAllImg[randomGenTwo];
//   var displayImgThree = arrayAllImg[randomGenThree];
//
//   // get each img by it's id
//   var imgOne = document.getElementbyId('imgOne');
//   var imgTwo = document.getElementbyId('imgTwo');
//   var imgThree = document.getElementbyId('imgThree');
//
//   // telling interpretor to look for filepath to display
//   imgOne.setAttribute('src' , imgOne.filePath);
//   imgTwo.setAttribute('src' , imgTwo.filePath);
//   imgThree.setAttribute('src' , imgThree.filePath);
//
// }
//
// var arrayAllImages = [
//   new Image ('bag' , 'assets/bag.jpg'),
//   new Image ('banana' , 'assets/banana.jpg'),
//   new Image ('bathroom' , 'assets/bathroom.jpg'),
//   new Image ('boots' , 'assets/boots.jpg'),
//   new Image ('breakfast' , 'assets/breakfast.jpg'),
// ];
//
// imgOne.addEventListener('click' , loadImage);
// imgTwo.addEventListener('click' , loadImage);
// imgThree.addEventListener('click' , loadImage);
