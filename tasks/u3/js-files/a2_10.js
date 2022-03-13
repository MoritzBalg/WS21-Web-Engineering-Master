function unarymf(unaryFun, operatorSign){
    return (first)=>{
        first = isNaN(first)?first.value:first
        return m(unaryFun(first), `(${operatorSign} ${first})`);
    }
}

//Test
function square(a){return a*a}
const squarem = unarymf(square, "square"); 
function m(value, source = value){
    return {"value": value, "source": source.toString()};
}
console.log(JSON.stringify(squarem(4)));
// {"value": 16, "source": "(square 4)"}