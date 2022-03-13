function demethodize(unaryFun){
    return function(a, b){
        return (a).unaryFun(b);
    }
}

//Test
function add(a,b){return a+b}
function methodize(binaryFun){
    return function(a){
        return binaryFun(this, a)
    }
}
Number.prototype.add = methodize(add);

// Test
console.log((2).add(2));
//console.log(demethodize(Number.prototype.add)(3,3))
            