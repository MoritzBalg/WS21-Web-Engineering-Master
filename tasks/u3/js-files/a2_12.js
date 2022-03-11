function mul(a,b){
    return a*b;
}

function exp(expression){
    //find the deepes Array Entry
    let arry = [];
    for(let entry of expression){
        if(Array.isArray(entry)){//more values inside
            arry.push(exp(entry));
        }else{ //normale value or function
            arry.push(entry);
        }
    }
    //function on first position
    const op = arry.shift();
    return op.apply(null, arry);
    
}
