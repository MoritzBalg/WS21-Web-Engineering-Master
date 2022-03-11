function binarymf(binFun, operatorSign){
    return (first, second)=>{
        return m(binFun(first.value, second.value), `(${first.value} ${operatorSign} ${second.value})`);
    }
}