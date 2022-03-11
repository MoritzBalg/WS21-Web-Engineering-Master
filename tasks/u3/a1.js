function add(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}


//3.1.1
function identity_function(a){
    return _=>{return a;}
}

//3.1.2
function addf(a){
    return (b)=>{return a+b;}
}

//3.1.3
function applyf(binFunction){
    return (a)=>{
        return (b)=>{return binFunction(a,b);}
    }
}

//3.1.4
function curry(binaryFun, arg){
    return (arg2)=>{return binaryFun(arg, arg2);}
}

//3.1.5
const inc1 = addf(1);
const inc2 = applyf(add)(1);
const inc3 = curry(add, 1);

//3.1.6
//Großer Fallstrick mit "=>"-Syntax da diese den this Kontext nicht korrekt hat.
function methodize(binaryFun){
    return function(a){
        return binaryFun(this, a)
    }
}

//3.1.7
function demethodize(unaryFun){
    return function(){

    }
}

//3.1.8
function twice(binaryFun){
    return (a)=>{return binaryFun(a,a);}

}

//3.1.9
const double = twice(add);
const square = twice(mul);

function composeu(unaryFun1, unaryFun2){
    return (a)=>{return unaryFun2(unaryFun1(a))};
}

//3.1.10
function composeb(binaryFun1, binaryFun2){
    return (a,b,c)=>{return binaryFun2(binaryFun1(a,b),c);}
}

//3.1.11
function once(func){
    let used = false;
    return(a,b)=>{
        if(!used){
            used = true;
            return func(a,b)
        }
        else{
            throw new Error("This function was already called!");
        }
    }
}

//3.1.12
function counterf(a){
    return{
        inc: ()=>{return ++a},
        dec: ()=>{return --a}
    }
}

//3.1.13
function revocable(func){
    let revoked = false;
    return{
        invoke: (a)=>{
            if(!revoked){
                func(a);
            }else{
                throw new Error("This function was revoked!")
            }
        },
        revoke: _=>{revoked = true;}
    }
}

//3.1.14
function vector(){
    let arry = [];
    return{
        get: (a)=>{return arry[a];},
        store: (a,b)=>{arry[a] = b;},
        append: (a)=>{arry.push(a)}
    }
}

//3.2.1
class PubSub{
    
    constructor(){
        this.subscriber = [];
    }

    subscribe(func){
        this.subscriber.push(func);

    }

    publish(message){
        for(let sub of this.subscriber){
            sub(message);
        }
    }
}

//3.2.2
class GenSym{
    constructor(){
        this.num = 0;
    }

    gensymf(character){
        const ch = character.charAt(0);
        return (ch + this.num++).toString();
    }
}

//3.2.3
class Fibonacci{
    constructor(first, second){
        this.first = first;
        this.second = second;
    }

    fib(){
        const result = this.first + this.second;
        this.first = this.second;
        this.second = result;
        return result;
    }
}

//3.2.4
function addg(a){
    let sum = a;
    const func = (b)=>{
        if(b !== undefined){
            sum += b;
            return func;
        }
        return sum;
    }
    return func;
}

//3.2.5
function applyg(binFunction){
    let sum = 0;
    const func = (b)=>{
        if(b !== undefined){
            sum = binFunction(sum, b);
            return func;
        }
        return sum;
    }
    return func;
}

function add(a,b){
    return a + b;
}



//3.2.6
function m(value, source = value){
    return {"value": value, "source": source.toString()};
}

//3.2.7
function addm(first, second){
   return m(first.value + second.value, `(${first.value} + ${second.value})`);
}

//3.2.8
function binarymf(binFun, operatorSign){
    return (first, second)=>{
        return m(binFun(first.value, second.value), `(${first.value} ${operatorSign} ${second.value})`);
    }
}

//3.2.9
function binarymf_2(binFun, operatorSign){
    return (first, second)=>{
        first = isNaN(first)?first.value:first
        second = isNaN(second)?second.value:second
        return m(binFun(first,second), `(${first} ${operatorSign} ${second})`);
    }
}

//3.2.10

function unarymf(unaryFun, operatorSign){
    return (first)=>{
        first = isNaN(first)?first.value:first
        return m(unaryFun(first), `(${operatorSign} ${first})`);
    }
}

//3.2.11
function hyp(a,b){
    return Math.sqrt(a*a + b*b);
}

//3.2.12
function mul(a,b){
    return a*b;
}

function exp(expression){
    //find the deepes Array Entry
    let arry = [];
    for(let entry of expression){
        if(Array.isArray(entry)){//more values inside
            arry.push(exp(entry));
        }else{ //normale value or function
            arry.push(entry);
        }
    }
    //function on first position
    const op = arry.shift();
    return op.apply(null, arry);
    
}

//3.2.13
function store(a){
    variable = a;
}

//3.2.14
function identityf(a){
    return a;
}

function quatre(binFunction, op1, op2, storage){
    storage(binFunction(op1, op2));
}

//3.2.15
function unaryc(unaryFun){
    return (arg, callBack)=>{
        callBack(unaryFun(arg));
    }
}

//3.2.16
function binaryc (binaryFun){
    return (arg1, arg2, callBack)=>{
        callBack(binaryFun(arg1, arg2));
    }
}