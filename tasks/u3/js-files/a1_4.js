function curry(binaryFun, arg){
    return (arg2)=>{return binaryFun(arg, arg2);}
}
