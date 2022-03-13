function unaryc(unaryFun){
    return (arg, callBack)=>{
        callBack(unaryFun(arg));
    }
}
//Test
let variable
function store(a){
    variable = a;
}
const sqrtc = unaryc(Math.sqrt); 
sqrtc(81, store);
console.log(variable) //9