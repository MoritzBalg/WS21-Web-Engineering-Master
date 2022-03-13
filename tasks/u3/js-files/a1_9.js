function composeu(unaryFun1, unaryFun2){
    return (a)=>{return unaryFun2(unaryFun1(a))};
}

//Test
function twice(binaryFun){
    return (a)=>{return binaryFun(a,a);}
}

function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

const double = twice(add);
const square = twice(mul);

console.log(composeu(double,square)(3))