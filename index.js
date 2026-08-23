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


const error = document.getElementById("error");

class Schools{
    constructor(school, username, password, email){
        this.school = school;
        this.username = new Username(username, password, email);
        }
    set school(school){
        if(typeof school === "string" && school.length > 0){
            this._school = school;
        }
        else{
            error.innerHTML = "Please enter a valid school name";
        }
    }

    get school(){
        return this._school;
    }
}

class Username{
    constructor(username, password, email){
        this.username = username;
        this.credentials = new Credentials(password, email);
    }
    set username(username){
        if(typeof username === "string" && username.length > 0){
            this._username = username;          
        }
        else{
            error.innerHTML = "Please enter a valid username";
        }
    }
    get username(){
        return this._username;
    }
}
class Credentials{
    constructor(password, email){
        this.password = password;
        this.email = email;
    }
    set password(password){
        if(typeof password === "string" && password.length > 0){
            this._password = password;
            
        }
        else{
            error.innerHTML = "Please enter a valid password";
        }
    }
    get password(){
        return this._password;
    }
    set email(email){
        if(typeof email === "string" && email.length > 0){
            this._email = email;
            
        }
        else{
            error.innerHTML = "Please enter a valid email";
        }
    }
    get email(){
        return this._email;
    }
}


document.getElementById("signup").onclick = function(){
    error.textContent = "";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const school = document.getElementById("school").value;
    const newLogin = new Schools(school, username, password, email);
    onValue(ref(database, `schools/${school}/${username}`), (snapshot) => {
        if(!snapshot.exists()){
            if(error.textContent === ""){
                error.style.color = "black";
                error.textContent = "Account created successfully!";
            }
            set(ref(database, `schools/${newLogin.school}/${newLogin.username.username}`), {
                credentials: {
                    password: newLogin.username.credentials.password,
                    email: newLogin.username.credentials.email
                }
            });
        }
        else{
            error.innerHTML = "Username taken, please chosse another username";
        }
    }, {onlyOnce: true});
}
