function quatre(binFunction, op1, op2, storage){
    storage(binFunction(op1, op2));
}

//Test
let variable
function store(a){
    variable = a;
}
function identityf(a){return a;}
function add(a,b){return a+b};
quatre( add, identityf(3), identityf(4), store);
console.log(variable);// variable === 7
            