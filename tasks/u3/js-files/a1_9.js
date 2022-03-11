const double = twice(add);
const square = twice(mul);

function composeu(unaryFun1, unaryFun2){
    return (a)=>{return unaryFun2(unaryFun1(a))};
}