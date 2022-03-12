function identity_function(a){
    return _=>{return a;}
}

// Test
const x = identity_function(12)

console.log(x());