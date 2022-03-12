// Pre

function add(a,b){
    return a+b;
}

function applyf(binFunction){
    return (a)=>{
        return (b)=>{return binFunction(a,b);}
    }
}

function addf(a){
    return (b)=>{return a+b;}
}


function curry(binaryFun, arg){
    return (arg2)=>{return binaryFun(arg, arg2);}
}


const inc1 = addf(1);
const inc2 = applyf(add)(1);
const inc3 = curry(add, 1);

// Test

console.log(inc1(2))
console.log(inc2(3))
console.log(inc3(4))
            