

  

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





// Simple carousel logic

document.addEventListener('DOMContentLoaded', () => {

  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const carouselContainer = document.querySelector('.carousel-container');

  if (!slides.length || !nextBtn || !prevBtn || !carouselContainer) return;

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  nextBtn.addEventListener('click', () => {
    showSlide((currentSlide + 1) % slides.length);
  });

  prevBtn.addEventListener('click', () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  });

  let autoSlide = setInterval(() => {
    showSlide((currentSlide + 1) % slides.length);
  }, 3000);

  carouselContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
  carouselContainer.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      showSlide((currentSlide + 1) % slides.length);
    }, 3000);
  });

  showSlide(0);

});
