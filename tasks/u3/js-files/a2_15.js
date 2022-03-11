function unaryc(unaryFun){
    return (arg, callBack)=>{
        callBack(unaryFun(arg));
    }
}