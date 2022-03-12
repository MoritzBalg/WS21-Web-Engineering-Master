function curry(binaryFun, arg){
    return (arg2)=>{return binaryFun(arg, arg2);}
}

// Test
function mul(a,b){
    return a*b;
}

console.log(curry(mul, 5)(6));        