//Array Wrapper
  function arrayWrapper(){
    let array = [...arguments];
    return{
        get: pos=>{return array[pos]},
        set: (pos, val)=>{array[pos] = val},
        append: val => {array.push(val)}
    }
}

//Array Wrapper
function arrayWrapper2(){
    let array = [...arguments];
    return{
        get: pos=>{return array[pos]},
        set: (pos, val)=>{
            const regex = /^[0-9]+/;
            if(regex.test(pos)){
                pos = parseInt(pos);
                array[pos] = val
            }else{
                throw new Error("Invalid input for Parameter 'pos'");
            }           
        },
        append: val => {array.push(val)}
    }
}

//Array Exploit
function exploit(vector){
    let data;
    vector.set('push', function(){data = this});
    vector.append();
    return data;
}

//Test
let vek = arrayWrapper(1,2,3,4);
vek.append(5);
console.log(exploit(vek));

let vek2 = arrayWrapper2(1,2,3,4);
vek2.append(5);
console.log(exploit(vek2));