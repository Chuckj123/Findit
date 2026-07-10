document.addEventListener("DOMContentLoaded", async function() {
    
await setTimeout(async ()=>{
    console.log(`HTML loaded :)`)
    try{
    const response = await fetch('http://localhost:5000/get'); 
    const data = await response.json();
    console.log(data);
    }
    catch{
        console.log("failed");
    }
},2000);//delay in milliseconds btw//
});