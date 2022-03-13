function binarymf(binFun, operatorSign){
    return (first, second)=>{
        return m(binFun(first.value, second.value), `(${first.value} ${operatorSign} ${second.value})`);
    }
}
//Test
function add(a,b){return a + b;}
const addm = binarymf(add, "+"); 
function m(value, source = value){
    return {"value": value, "source": source.toString()};
}
console.log(JSON.stringify(addm(m(3), m(4)))); // {"value": 7, "source": "(3+4)"}