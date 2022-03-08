function edit(cmd, value=null){
    document.execCommand(cmd,false,value);
}

function clean(){
    document.getElementById("content").innerText = "";
}