// Array of background images
const bgImages = [
  "./images/bg img/1.jpg",
  "./images/bg img/2.jpg",
  "./images/bg img/3.jpg",
  "./images/bg img/4.jpg",
  "./images/bg img/5.jpg",
  "./images/bg img/6.jpg",
];

// Function to set random background image
function setRandomBackground() {
  const randomImage = bgImages[Math.floor(Math.random() * bgImages.length)];
  document.querySelector(
    ".head"
  ).style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${randomImage}')`;
}

// Set random background on page load
window.onload = setRandomBackground;
