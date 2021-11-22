const fs = require('fs');
let firstFile;
let secondFile;
if(!((firstFile = process.argv[2]) && (secondFile = process.argv[3]))){
    console.error("Bitte geben Sie Dateipfade an!")
    process.exit(1);
}
firstFile = __dirname + "\\numbers.txt";
secondFile = __dirname + "\\letters.txt";
fs.readFile(firstFile, "utf8",(err1, data1)=>{
    fs.readFile(secondFile, "utf8",(err2, data2)=>{
        if(err1 || err2){
            console.log("Fehler beim Einlesen der Dateien.")
        }
        let result = "";
        let aContent = data1.split("\n");
        let bContent = data2.split("\n");
        for(let i = 0; i < aContent.length; i++){
            result += aContent[i] + " " + bContent[i] + "\r\n";
        }
        console.log(result);
    });
});
