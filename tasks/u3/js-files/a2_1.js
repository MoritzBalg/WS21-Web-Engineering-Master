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