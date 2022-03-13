function fibonaccif(first, second){
    let _first = first;
    let _second = second;
    return ()=>{
        const result = _first + _second;
        _first = _second;
        _second = result;
        return result;
    }
}

function fibonaccif(first, second){
    let _first = first;
    let _second = second;
    return ()=>{
        let result = _first;
        _first = _second;
        _second = result + _second;
        return result;
    }
}

//Test
var fib = fibonaccif(0, 1);
 console.log(fib()) // 0 
 console.log(fib()) // 1 
 console.log(fib()) // 1 
 console.log(fib()) // 2 
 console.log(fib()) // 3 
 console.log(fib()) // 5