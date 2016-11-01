'use strict';

var arrayAllImg = [];

// Constructor to make an array of all images with their properties
function Image (imgName , filePath){
  this.imgName = imgName;
  this.filePath = filePath;
  this.numbTimesDisplayed = 0;
  this.numbTimesClicked = 0;
  arrayAllImg.push(this);
};

// place function here to run the below (eventhandler)
function loadImage(){

// function to generate a random number from the length of the array containing all images
  function randomNumbGenerator(){
    var randomNumb = parseInt(Math.random() * arrayAllImg.length);
    return randomNumb;
  };

  // provides randomly generated number from randomNumbGenerator function
  var randomGenOne = randomNumbGenerator();
  var randomGenTwo = randomNumbGenerator();
  var randomGenThree = randomNumbGenerator();

  // places randomly generated number into arrayAllImg to pick img from the array
  var displayImgOne = arrayAllImg[randomGenOne];
  var displayImgTwo = arrayAllImg[randomGenTwo];
  var displayImgThree = arrayAllImg[randomGenThree];

  // get each img by it's id
  var imgOne = document.getElementbyId('imgOne');
  var imgTwo = document.getElementbyId('imgTwo');
  var imgThree = document.getElementbyId('imgThree');

  // telling interpretor to look for filepath to display
  imgOne.setAttribute('src' , imgOne.filePath);
  imgTwo.setAttribute('src' , imgTwo.filePath);
  imgThree.setAttribute('src' , imgThree.filePath);

}

var arrayAllImages = [
  new Image ('bag' , 'assets/bag.jpg'),
  new Image ('banana' , 'assets/banana.jpg'),
  new Image ('bathroom' , 'assets/bathroom.jpg'),
  new Image ('boots' , 'assets/boots.jpg'),
  new Image ('breakfast' , 'assets/breakfast.jpg'),
];

imgOne.addEventListener('click' , loadImage);
imgTwo.addEventListener('click' , loadImage);
imgThree.addEventListener('click' , loadImage);
