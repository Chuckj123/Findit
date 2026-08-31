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

  
  import{getDatabase, set, get, ref, push}from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
  const database = getDatabase();


  async function displayObjects(){
    const category = await get(ref(database, `schools/school/items/Tech`))
    category.forEach(element => {
      console.log(element.key);
      console.log(element.val());
      const description = element.val().Description;
      const item = element.val().Item;
      const location = element.val().Location;
      const object = document.createElement("div");
      object.classList.add("lostObjects");
      object.innerHTML = `<h1 id = 'name'>${item}</h1><h1 id = 'category'>category</h1><h1 id = 'location'>${location}</h1><h1 id = 'description'>${description}</h1>`;
      document.getElementById(`displayItems`).appendChild(object);
    });

  }
  displayObjects()
  
//End of Firebase

// document.addEventListener("DOMContentLoaded", async function() {
    
// await setTimeout(async ()=>{
//     console.log(`HTML loaded :)`)
//     try{
//     const response = await fetch('http://localhost:5000/get'); 
//     const data = await response.json();
//     console.log(data);
//     }
//     catch{
//         console.log("failed");
//     }
// },2000);//delay in milliseconds btw//
// });



