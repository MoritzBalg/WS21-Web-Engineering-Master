function identityf(a){
    return a;
}

function quatre(binFunction, op1, op2, storage){
    storage(binFunction(op1, op2));
}