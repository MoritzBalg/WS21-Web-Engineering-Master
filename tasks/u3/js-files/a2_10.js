function unarymf(unaryFun, operatorSign){
    return (first)=>{
        first = isNaN(first)?first.value:first
        return m(unaryFun(first), `(${operatorSign} ${first})`);
    }
}