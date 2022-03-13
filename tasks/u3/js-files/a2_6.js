function m(value, source = value){
    return {"value": value, "source": source.toString()};
}

//Test
console.log(JSON.stringify(m(1))); // {"value": 1, "source": "1"} 
console.log(JSON.stringify(m(Math.PI, "pi"))); // {"value": 3.14159..., "source": "pi"}