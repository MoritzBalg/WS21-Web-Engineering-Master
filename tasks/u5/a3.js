self.addEventListener("message", (event)=>{
    console.log("Daten erhalten");
    for(let i=0; i < event.data; i++){
        if(isPrim(i)) {
            self.postMessage(i);
        }
    }
    console.log("Daten verarbeitet");
})

//Sieb des Eratosthenes
function isPrim(number){
    if(number <=1 || number%2===0){
        return false;
    }

    for(let i=2 ; i<= (number/2)+1 ; i++){
        if(number%i===0){
            return false;
        }
    }
    return true;
}