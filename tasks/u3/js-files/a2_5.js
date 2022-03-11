function applyg(binFunction){
    let sum = 0;
    const func = (b)=>{
        if(b !== undefined){
            sum = binFunction(sum, b);
            return func;
        }
        return sum;
    }
    return func;
}

function add(a,b){
    return a + b;
}