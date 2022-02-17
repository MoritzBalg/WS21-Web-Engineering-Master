const fs = require('fs');
let firstFile;
let secondFile;
console.time('Performance');
if(!((firstFile = process.argv[2]) && (secondFile = process.argv[3]))){
    console.error("Bitte geben Sie Dateipfade an!")
    process.exit(1);
}
fs.readFile(firstFile, "utf8",(err1, data1)=>{
    fs.readFile(secondFile, "utf8",(err2, data2)=>{
        if(err1 || err2){
            console.log("Fehler beim Einlesen der Dateien.")
        }
        let result = "";
        let aContent = data1.split("\n");
        let bContent = data2.split("\n");
        for(let i = 0; i < aContent.length-1; i++){
            result += aContent[i] + " " + bContent[i] + "\n";
        }
        result += aContent[aContent.length-1] + " " + bContent[aContent.length-1];
        fs.writeFileSync(__dirname + "\\mergedFilesA.txt",result);
    });
});
console.timeEnd('Performance');
