let mainMenu, sideMenu, contentArea, content;
let selectedMainTopic = "home", selectedSideTopic = "Willkommen";

window.addEventListener("load", async _=>{
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("~/pwa.js")
        .then(registration=>{
            console.log("Service Worker erfolgreich registriert. Scope: ", registration.scope);
        }).catch((error)=>{
            console.error("Fehler bei der Registrierung des Service-Workers: ", error);
        });
    }
    content = await loadContent("./content.json");
    //get main and side menu to load them with the content
    mainMenu = document.getElementById("main-menu");
    sideMenu = document.getElementById("side-menu");
    aside = document.getElementById("main-aside");
    contentArea = document.getElementById("content-area");
    hider = document.getElementById("hider");

    hider.addEventListener("click",()=> {
        aside.style.display = "none";
        hider.style.display = "none";
    });

    mainMenu.addEventListener("click",_=>{
        hider.style.display = "block";
        aside.style.display = "block";
    })



    
    loadMainTopics(mainMenu, Object.keys(content));
    refreshContent();
    history.pushState({key1: selectedMainTopic, key2: selectedSideTopic},"");
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


async function loadHTML(url){
    const request = await fetch(url);
    if(request.ok){
        try {
            const text =  await request.text();
            const parser = new DOMParser();
            const dom = parser.parseFromString(text, "text/html");
            return dom;   
        } catch (error) {
            console.error("Invalid Text Format in " + url);
    }
    }else{
        console.error("Fail to fetch File " + url);
    }
}



function loadMainTopics(elem, topics){
   elem.innerText = "";
    for(let topic of topics){
        const entry = document.createElement("li");
        entry.innerText = topic.toUpperCase();
        elem.appendChild(entry);
        if(topic === selectedMainTopic){entry.classList.add("active")};    
        entry.addEventListener("click", _=>{
            selectedMainTopic = topic;
            loadSideTopics(sideMenu, Object.keys(content[topic]));
            activate(entry);
        }); 
    }
}

function loadSideTopics(elem, topics){
    elem.innerText = "";
     for(let topic of topics){
         const entry = document.createElement("li");
         entry.innerText = topic.toUpperCase();
         if(topic === selectedSideTopic){entry.classList.add("active")};    
         elem.appendChild(entry);    
         entry.addEventListener("click", _=>{
            selectedSideTopic = topic;
            history.pushState({key1: selectedMainTopic, key2: selectedSideTopic},"");
            refreshContent();
            activate(entry);
        }); 
     }
 }

async function refreshContent(){
     const textContent  = await loadHTML(content[selectedMainTopic][selectedSideTopic].content);
     contentArea.innerHTML = `
        <h1><typing-field id="headline">${content[selectedMainTopic][selectedSideTopic].headline}</typing-field></h1>
        <section id="html-section"></section>
`;
    const anchor = document.querySelector("#html-section");
    const elements = Array.from(textContent.querySelector("body").children);


    
    for(let elem of elements){
        //Scripte werden nicht ausgeführt, wenn sie via innerHTML eingefügt werden. Deshalb werden hierfür neue Knoten erzeugt. 
        if(elem.tagName === "SCRIPT" || elem.tagName === "script"){
            const newScript = document.createElement("script");
            newScript.innerHTML = elem.innerHTML;
            anchor.appendChild(newScript);
        }else{
            anchor.appendChild(elem);
        }
    }
    document.title = selectedSideTopic;
 }

 function activate(elem){
     //reset the active marker 
     const activeElement = elem.parentElement.querySelector(".active")
     if(activeElement) {
         activeElement.classList.remove("active");
     }
    //elem.parentElement.querySelector(".active").classList.remove("active");   
    elem.classList.add("active");
 }

 window.addEventListener("popstate", (event)=>{
    selectedMainTopic = event.state.key1;
    selectedSideTopic = event.state.key2;
    refreshContent();
})