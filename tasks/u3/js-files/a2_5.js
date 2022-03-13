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

//Test
function add(a,b){
    return a+b;
}

console.log(applyg(add)(3)(4)(5)());//12
console.log(applyg(add)(1)(2)(4)(8)());//15 


