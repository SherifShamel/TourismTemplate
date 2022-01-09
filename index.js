//select landing page
let landingPage=document.querySelector(".landing-page");

//get array of images
let imgArray = ["hero-bg1.jpg","hero-bg2.jpg","hero-bg3.jpg"];

setInterval(function(){
//get random number
let randomNumber=Math.floor(Math.random() * imgArray.length);

//change background image url
landingPage.style.backgroundImage = 'url("images/' + imgArray[randomNumber] +'")';

},5000);