const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
const slides = document.querySelector('.slides');
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % 3; // Adjust for 3 slides
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set interval for automatic sliding
setInterval(showNextSlide, 3000); // Change slide every 3 seconds
