function exp(expression){
    //find the deepes Array Entry
    let arry = [];
    for(let entry of expression){
        if(Array.isArray(entry)){
            arry.push(exp(entry));
        }else{ //normale value or function
            arry.push(entry);
        }
    }
    //function on first position
    const op = arry.shift();
    return op.apply(null, arry);
    
}

//Test
function add(a,b){return a+b;}
function mul(a,b){return a*b;}
const hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ];
console.log(exp(hypa)); // 5