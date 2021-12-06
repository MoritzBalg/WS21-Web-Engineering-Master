//run a local host httpserver with Express.js module
const express = require('express');
const fs = require('fs');
const app = express();
const files = fs.readdirSync("./files/");
console.log(files);

app.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(`
    <h1>FileMerger mit NodeJS Express</h1>
    <p>Wählen Sie die zwei Dateien aus, die Sie verbinden möchten</p>
    <div>
        <p id="selector">
        </p>
        <button id="send">senden</button>
    </div>
    
    <script>
        document.addEventListener("load", (event)=>{
            const con = document.getElementById("selector");
            con.appendChild(document.createElement("h1"));
        });
    
        document.getElementById("send").addEventListener("click",function(){
            var text = document.getElementById("text").value;
            var data = JSON.stringify({"text": text});
            post(data);
        });
    
        //https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery
        function post(data){
            var xhr = new XMLHttpRequest();
            var url = "/";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    console.log(json.email + ", " + json.password);
                }
            };
            xhr.send(data);
        }
    </script>
    `)
});


app.listen(3000);
