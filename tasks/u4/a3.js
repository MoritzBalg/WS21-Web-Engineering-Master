window.addEventListener("load", function (){
    let cells = document.getElementsByTagName("td");
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener("click",function (){
            if(this.textContent.charAt(0) === "="){
                execFormula(this.textContent.substr(1));
            }
        });
    }
});

function execFormula (formula){
    const input = formula.toUpperCase();
    const cmd = input.split("(")[0];
    let param =  input.split("(")[1];
    param = param.split(")")[0];
    switch (cmd){
        case "SUM": sum(param); break;
        default: alert("Unbekanntes Kommando");
    }
}

function sum(input){
    console.log(input);
    let sum = 0;
    const row = input.charAt(0); //A
    const startCell = input.split(",")[0].substr(1);
    const endCell = input.split(",")[1].substr(1);
    console.log("Start: " + startCell + " End: " + endCell);
    for(let i = startCell;  i < endCell; i++){
        //Werte aus den Zellen lesen und aufaddieren
        sum ++;
    }
    console.log(sum);
    return sum;
}
