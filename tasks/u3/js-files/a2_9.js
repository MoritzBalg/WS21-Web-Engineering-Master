function binarymf_2(binFun, operatorSign){
    return (first, second)=>{
        first = isNaN(first)?first.value:first
        second = isNaN(second)?second.value:second
        return m(binFun(first,second), `(${first} ${operatorSign} ${second})`);
    }
}

//Test
function add(a,b){return a+b}
const addm = binarymf_2(add, "+");
function m(value, source = value){
    return {"value": value, "source": source.toString()};
}
console.log(JSON.stringify(addm(3, 4))) // {"value": 7, "source": "(3+4)"}