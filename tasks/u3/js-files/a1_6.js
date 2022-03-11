function methodize(binaryFun){
    return function(a){
        return binaryFun(this, a)
    }
}
