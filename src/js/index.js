

  

// import { getAnalytics } from "firebase/analytics";
 
 // import { getAnalytics, logEvent } from "firebase/analytics";

 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfF1xrjP7MFT-W7dGqSc3odQ8b1oZzFoQ",
  authDomain: "helioso-website.firebaseapp.com",
  projectId: "helioso-website",
  storageBucket: "helioso-website.firebasestorage.app",
  messagingSenderId: "724200512077",
  appId: "1:724200512077:web:036a903f06c9ce01809a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);


import '../assets/css/style.css';



// Simple carousel logic
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const carouselContainer = document.querySelector('.carousel-container');

  let currentSlide = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Arrow buttons
  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  // Automatic slide every 3s
  let autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }, 5000);

  // Pause on hover
  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
  carouselContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
    }, 5000);
  });

  // Initialize
  updateCarousel();
  window.addEventListener('resize', updateCarousel);
});
