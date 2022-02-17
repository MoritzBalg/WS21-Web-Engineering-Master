const fs = require('fs');
let firstFile;
let secondFile;
let mergeLine = [];

console.time('Performance');
if(!((firstFile = process.argv[2]) && (secondFile = process.argv[3]))){
    console.error("Bitte geben Sie Dateipfade an!")
    process.exit(1);
}
let file1Stream = fs.createReadStream(firstFile, "utf8");
let file2Stream = fs.createReadStream(secondFile, "utf8");
const lines1 = [], lines2 = [];
file1Stream.on("data",processDataFragment(lines1));
file2Stream.on("data",processDataFragment(lines2));
file1Stream.on("end",concatFile);
file2Stream.on("end",concatFile);


function processDataFragment(lineArray){
    return function (fragment){
    let i = 0;
     fragment.split("\n").forEach(function (line){
        if(!lineArray[i]){
            lineArray[i] = "";
            lineArray[i++] += line;
        }
     });
    }
}

let cnt = 0;
function concatFile(){
    cnt ++;
    if(cnt === 2){
        lines1.forEach((line, i) => mergeLine += line + " " + lines2[i] + "\n");
        fs.writeFileSync(__dirname + "\\mergedFilesB.txt",mergeLine);
    }
}
console.timeEnd('Performance');



