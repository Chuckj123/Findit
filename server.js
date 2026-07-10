
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
