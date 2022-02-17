
window.addEventListener("load", async _=>{
    const content = await loadContent("./content.json");
    
    for(let key in content){
        console.log(key)
    }



});

async function loadContent(url){
    const request = await fetch(url);
    if(request.ok){
        try {
            return await request.json();   
        } catch (error) {
            console.error("Invalid Json Format in " + url);
    }
    }else{
        console.error("Fail to fetch File " + url);
    }

}