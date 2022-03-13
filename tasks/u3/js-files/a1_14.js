function vector(){
    let arry = [];
    return{
        get: (a)=>{return arry[a];},
        store: (a,b)=>{arry[a] = b;},
        append: (a)=>{arry.push(a)}
    }
}

//Test
const my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
console.log(my_vector.get(0)); // 7
console.log(my_vector.get(1)); // 8


            