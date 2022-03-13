function pubsub(){
    let subscriber = [];
    return{
        subscribe: (func)=>{
            subscriber.push(func);
        },
        publish: (message)=>{
            for(let sub of subscriber){
                sub(message);
            }
        }

    }
}

//Test
const my_pubsub = pubsub();
my_pubsub.subscribe(alert);
my_pubsub.publish("It works!"); // alert("It works!")