function addg(a){
    let sum = a;
    const func = (b)=>{
        if(b !== undefined){
            sum += b;
            return func;
        }
        return sum;
    }
    return func;
}