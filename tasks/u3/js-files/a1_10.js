function composeb(binaryFun1, binaryFun2){
    return (a,b,c)=>{return binaryFun2(binaryFun1(a,b),c);}
}

//Test
function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

console.log(composeb(add,mul)(2,3,5));