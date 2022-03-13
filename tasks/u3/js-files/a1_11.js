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

//Test

function add(a,b){
    return a+b;
}

const add_once = once(add);
console.log(add_once(3, 4));
console.log(add_once(3, 4));
            