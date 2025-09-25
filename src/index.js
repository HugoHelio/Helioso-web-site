

  

 import { getAnalytics } from "firebase/analytics";
 
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


const analytics = getAnalytics(app);

