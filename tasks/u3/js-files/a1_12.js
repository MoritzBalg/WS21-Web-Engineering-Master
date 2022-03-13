function counterf(a){
    return{
        inc: ()=>{return ++a},
        dec: ()=>{return --a}
    }
}

const counter = counterf(10);
console.log(counter.dec()); //9
console.log(counter.dec()); //8
console.log(counter.inc()); //9