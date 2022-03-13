function methodize(binaryFun){
    return function(a){
        return binaryFun(this, a)
    }
}

//Test

function add(a,b){
    return a+b;
}            

Number.prototype.add = methodize(add);
console.log((3).add(4));