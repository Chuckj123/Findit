// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDITGL_1FIONA5lZAkC_524ZQAx84Meb4M",
  authDomain: "realfindit-9652f.firebaseapp.com",
  databaseURL: "https://realfindit-9652f-default-rtdb.firebaseio.com",
  projectId: "realfindit-9652f",
  storageBucket: "realfindit-9652f.firebasestorage.app",
  messagingSenderId: "315956524199",
  appId: "1:315956524199:web:4c910d2adbc3d2681d1782",
  measurementId: "G-PWX9Z4P5J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import{getDatabase, set, get, ref, push}from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
const database = getDatabase();

function loginbutton(){
    const name = document.getElementById("nameS").value;
    const password = document.getElementById("passwordS")
    const email = document.getElementById("emailS").value;
    const phone = document.getElementById("pnS").value;
    const school = document.getElementById("schoolS").value;
    const zip = document.getElementById("zipS").value;

    push(ref(database, `shools/${school}/users`),{
        [Name]:{
          Password: password,
          Email: email,
          Phone: phone,
          School: school,
          Zip: zip
        }
    })
}