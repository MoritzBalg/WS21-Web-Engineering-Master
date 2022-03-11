function applyf(binFunction){
    return (a)=>{
        return (b)=>{return binFunction(a,b);}
    }
}