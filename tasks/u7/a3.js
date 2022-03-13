const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static("/public"));


app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/public/a3.html');
})


app.listen(PORT, ()=>{console.log("Server aktiv auf Port: ", PORT)});
