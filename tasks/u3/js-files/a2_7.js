function addm(first, second){
    return m(first.value + second.value, `(${first.value} + ${second.value})`);
 }

 //Test
function m(value, source = value){
    return {"value": value, "source": source.toString()};
}

 console.log(JSON.stringify(addm(m(3), m(4)))); // {"value": 7, "source": "(3+4)"}