

  

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


document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const carouselContainer = document.querySelector('.carousel-container');

  let currentSlide = 0;
  let slideWidth = slides[0].offsetWidth; // initial width
  let autoSlide;

  // Function to update transform (GPU-accelerated, no reflow)
  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Recalculate slide width only on resize
  function handleResize() {
    slideWidth = slides[0].offsetWidth;
    updateCarousel();
  }
  window.addEventListener('resize', handleResize);

  // Go to next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  // Go to previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Attach arrow button events
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Auto-slide every 5s
  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  carouselContainer.addEventListener('mouseenter', stopAutoSlide);
  carouselContainer.addEventListener('mouseleave', startAutoSlide);

  // Initialize carousel
  updateCarousel();
  startAutoSlide();
});



// contact form thank you and reset
// Check if the contact form exists first

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async function(e) {
    e.preventDefault(); // stop normal form submission

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      const thankYou = document.getElementById("thank-you");

      if (response.ok) {
        contactForm.reset(); // clear the fields

        if (thankYou) {
          thankYou.style.display = "block";
          setTimeout(() => { thankYou.style.opacity = "1"; }, 50); // fade in
          setTimeout(() => { thankYou.style.opacity = "0"; }, 4000); // fade out
          setTimeout(() => { thankYou.style.display = "none"; }, 5000); // hide completely
        }
      } else {
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("❌ Network error. Please try again.");
    }
  });
}
