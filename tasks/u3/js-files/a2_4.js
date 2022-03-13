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

//Test
console.log(addg(3)(4)(5)()) //12
console.log(addg(1)(2)(4)(8)()) //15