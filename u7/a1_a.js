const fs = require('fs');
let input;
if(!(input = process.argv[2])){
    console.error("Bitte geben Sie die zu Anzahl der zu erzeugenden Zeilen an!")
    process.exit(1);
}
//Trennzeichen Entfernen
input.replace(".","");
input.replace("_","");
let text = "";

for(let i = 1; i < input; i++){
    text += i + "." + "\n";
}
//Letzte Zeile soll keinen Umbruch mehr haben.
text += input + ".";
fs.writeFileSync(__dirname + "\\numbers.txt",text);