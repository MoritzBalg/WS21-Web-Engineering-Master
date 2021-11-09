window.addEventListener("load", function (){
    document.getElementById("btn_add")
        .addEventListener("click", function () {
            add(document.getElementById("tb_item").value);
        });
});


//Sammlung aller Counter, damit diese einheitlich beendet werden können
let counters = [];

function Counter(button, time){
    const _button = button;
    const _time = time;
    let sekunden = 0;
    let intervall = null;

    this.isRunning = function(){
        return intervall;
    }

    this.start = function (){
        _button.textContent = "Stop";
        //Alle anderen Counter beenden
        counters.forEach(element =>{
            if(element.isRunning()){
                element.stop();
            }
        });
        intervall = setInterval(function (){
            sekunden++;
            _time.textContent = new Date(sekunden * 1000).toISOString().substr(11, 8);
        },1000);
    }

    this.stop = function (){
        _button.textContent = "Start";
        clearInterval(intervall);
        intervall = null;
    }
}

function add(name){
    const redner = document.createElement("li");
    redner.textContent = name;
    const startStopButton = document.createElement("button");
    startStopButton.textContent = "Start";
    const time = document.createElement("span");
    time.textContent = "00:00:00";
    let cnt = new Counter(startStopButton, time);
    counters.push(cnt);
    redner.appendChild(startStopButton);
    redner.appendChild(time);
    startStopButton.addEventListener("click",function (){
        cnt.isRunning()?cnt.stop():cnt.start();
    });
    cnt.start();
    document.getElementById("itemList").appendChild(redner);
}