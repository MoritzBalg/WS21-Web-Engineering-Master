function twice(binaryFun){
    return (a)=>{return binaryFun(a,a);}
}

//Test
function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

const double = twice(add);
const square = twice(mul);

console.log(double(10));
console.log(square(10));