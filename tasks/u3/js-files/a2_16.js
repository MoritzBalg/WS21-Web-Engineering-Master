function binaryc (binaryFun){
    return (arg1, arg2, callBack)=>{
        callBack(binaryFun(arg1, arg2));
    }
}

//Test
function add(a,b){return a+b};
function mul(a,b){return a*b};
let variable
function store(a){
    variable = a;
}

const addc = binaryc(add);
addc(4, 5, store);
console.log(variable); // 9
const mulc = binaryc(mul); 
mulc(2, 3, store) 
console.log(variable); // 6
            