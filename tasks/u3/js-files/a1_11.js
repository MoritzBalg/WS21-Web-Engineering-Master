function once(func){
    let used = false;
    return(a,b)=>{
        if(!used){
            used = true;
            return func(a,b)
        }
        else{
            throw new Error("This function was already called!");
        }
    }
}