function numToCharSeries(num){
    let overflow = parseInt(num/26);
    num %= 26;
    num += 65;
    return (overflow?numToCharSeries(overflow-1):"") + String.fromCharCode(num);
}

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

for(let i = 0; i < input-1; i++){
    text += numToCharSeries(i) + "\n";
}
//Letzte Zeile soll keinen Umbruch mehr haben.
text += numToCharSeries(input-1);
fs.writeFileSync(__dirname + "\\letters.txt",text);