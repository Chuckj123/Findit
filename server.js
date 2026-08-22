

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
const fs = require("fs");
const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


const readData = () => {
    const data = fs.readFileSync("./database.json", 'utf-8');
    return JSON.parse(data);
};

app.post('/add', (req, res) => {
    console.log(req.body)
    const data = JSON.parse(fs.readFileSync("database.json", "utf8"));
    newData = {
        "category": req.body["category"],
        "location": req.body["location"],
        "description": req.body["description"]
    }
    data[req.body["itemName"]] = newData
    fs.writeFileSync("database.json", JSON.stringify(data, null, 2));
});


app.get('/get', (req, res) => {
    res.json(readData());
    
});

app.listen(5000, () => console.log('Database running on port 5000'));
