
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
      alert('Thanks for registering with our website, your customer record was created successfully.');
      form.reset();
    }
  });
 
});

function validateForm(){
  
  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  const numBed = document.getElementById('numBed').value;
  const numBath = document.getElementById('numBath').value;
  const price = document.getElementById('price').value;
  
  


//check empty
if(!firstName || !lastName || !phone  || !numBed || !numBath ||!price || !email){
  alert ('All fields are mandatory, please fill in all the required fields');
  return false;
}



//check the phone number
if(parseInt(phone) < 1){
  alert('Invalid, Please re-enter again');
  return false;
}


//bed
if(parseInt(numBed) < 0){
  alert('Invalid, Please re-enter again');
  return false;
}

//check if password and confirm match and meet require,mets
if(parseInt(numBath) < 0){
  alert('Invalid, Please re-enter again');
  return false;
}

//check email
const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
if(!email.match(emailPattern)){
  alert('Invalid Email format, please enter again');
  return false;
}

// alert('Thanks for registering with our website, your customer record was created successfully.')
return true;
}


const images = ['jhouse.jpg', 'jhouse2.jpg', 'jhouse3.jpg']; // Array of image filenames
let currentImageIndex = 0;

function changeImage() {
    const image = document.getElementById('image');
    currentImageIndex = (currentImageIndex + 1) % images.length; // Cycle through images

    // Set the new image source
    image.src = images[currentImageIndex];
}

const images2 = ['jhouse4.webp', 'jhouse5.webp', 'jhouse6.jpg']; // Array of image filenames
let currentImageIndex2 = 0;

function changeImage2() {
    const image2 = document.getElementById('image2');
    currentImageIndex2 = (currentImageIndex2 + 1) % images.length; // Cycle through images

    // Set the new image source
    image2.src = images2[currentImageIndex2];
}



const images3 = ['jhouse7.jpg', 'jhouse8.jpg', 'jhouse9.jpg']; // Array of image filenames
let currentImageIndex3 = 0;

function changeImage3() {
    const image3 = document.getElementById('image3');
    currentImageIndex3 = (currentImageIndex3 + 1) % images.length; // Cycle through images

    // Set the new image source
    image3.src = images3[currentImageIndex3];
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
}



