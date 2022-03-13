function gensymf(char){
    let num = 0;
    return ()=>{return char.charAt(0) + "" + num++};
    
}
//Test
const gensym = gensymf('G');
console.log(gensym()); //'G0'
console.log(gensym()); //'G1'
console.log(gensym()); //'G2'
console.log(gensym()); //'G3'