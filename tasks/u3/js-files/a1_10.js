function composeb(binaryFun1, binaryFun2){
    return (a,b,c)=>{return binaryFun2(binaryFun1(a,b),c);}
}
