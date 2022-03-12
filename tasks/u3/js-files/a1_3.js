function applyf(binFunction){
    return (a)=>{
        return (b)=>{return binFunction(a,b);}
    }
}

// Test
function add(a,b){
    return a+b;
}

const addf = applyf(add);
console.log(addf(3)(3));
