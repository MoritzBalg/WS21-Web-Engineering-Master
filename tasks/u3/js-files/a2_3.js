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