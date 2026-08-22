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
    projectId: "realfindit-9652f",
    storageBucket: "realfindit-9652f.firebasestorage.app",
    messagingSenderId: "315956524199",
    appId: "1:315956524199:web:4c910d2adbc3d2681d1782",
    measurementId: "G-PWX9Z4P5J7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function buttonclicky(){
    document.getElementsByClassName(`sheet`)[0].style.display = `block`;
}

function postButtonClick(){
    document.getElementsByClassName(`sheet`)[0].style.display = `none`;


    //inputboxythingy
    const itemName = document.getElementById('itemName').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const data = {
        itemName,
        category,
        location,
        description
    };

    fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

// //loginpage
function loginbutton(){
    const nameS = document.getElementById('name').value;
    const emailS = document.getElementById('emailS').value;
    const passwordS = document.getElementById('passwordS').value;
    const pn = document.getElementById('pnS').value;
    const schoolS = document.getElementById('schoolS').value;
    const zipS = document.getElementById('zipS').value;
}


