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

import { getDatabase, set, ref, onValue } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
const database = getDatabase();

const error2 = document.getElementById("error2");

const signin = document.getElementById("signin");
signin.onclick = function(){
    error2.textContent = "";
    const username2 = document.getElementById("username2").value;
    const password2 = document.getElementById("password2").value;
    const school2 = document.getElementById("school2").value;
    onValue(ref(database, `schools/${school2}/${username2}`), (snapshot) => {
        if(snapshot.exists()){
            if(snapshot.val().credentials.password === password2){
                error2.style.color = "black";
                error2.textContent = "Login successful!";
            }
            else{
                error2.innerHTML = "Incorrect username, password, or school";
            }
        }
        else{
            error2.innerHTML = "Incorrect username, password, or school";
        }
    });
}