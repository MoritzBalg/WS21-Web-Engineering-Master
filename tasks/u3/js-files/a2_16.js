function binaryc (binaryFun){
    return (arg1, arg2, callBack)=>{
        callBack(binaryFun(arg1, arg2));
    }
}