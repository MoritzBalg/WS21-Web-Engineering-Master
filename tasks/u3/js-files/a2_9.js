function binarymf_2(binFun, operatorSign){
    return (first, second)=>{
        first = isNaN(first)?first.value:first
        second = isNaN(second)?second.value:second
        return m(binFun(first,second), `(${first} ${operatorSign} ${second})`);
    }
}