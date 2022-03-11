function vector(){
    let arry = [];
    return{
        get: (a)=>{return arry[a];},
        store: (a,b)=>{arry[a] = b;},
        append: (a)=>{arry.push(a)}
    }
}
