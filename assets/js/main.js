let mainMenu, sideMenu, contentArea;

window.addEventListener("load", async _=>{
    const content = await loadContent("./content.json");
    //get main and side menu to load them with the content
    mainMenu = document.getElementById("main-menu");
    sideMenu = document.getElementById("side-menu");
    contentArea = document.getElementById("content-area");

    loadMainTopics(mainMenu, content);
    loadSideTopics(sideMenu, content, "home");



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

function loadMainTopics(menuElem, jsonFile){
    menuElem.innerHTML = ""; //only the last call of this function will resut in the navigation
    for(let key in jsonFile){
        const entry = document.createElement("li");
        entry.innerText = key.toUpperCase();
        entry.addEventListener("click", ()=>{
            loadSideTopics(sideMenu, jsonFile, key);
            document.querySelectorAll("#main-menu .active").forEach(n => n.classList.remove("active"));
            entry.classList.add("active"); 
        }); 
        menuElem.appendChild(entry);
    }
    document.querySelector("#main-menu > li").classList.add("active");
}

function loadSideTopics(menuElem, jsonFile, mainTopic){
    menuElem.innerHTML = ""; //only the last call of this function will resut in the navigation
    for(let key in jsonFile[mainTopic]){
        const entry = document.createElement("li");
        entry.innerText = key.toUpperCase();
        entry.addEventListener("click", ()=>{
            loadTextContent(jsonFile, mainTopic, key);
            document.querySelectorAll("#side-menu .active").forEach(n => n.classList.remove("active"));
            entry.classList.add("active");  
        });
        menuElem.appendChild(entry);
       
    }
    loadTextContent(jsonFile, mainTopic, Object.keys(jsonFile[mainTopic])[0]); //always load the first section
    document.querySelector("#side-menu > li").classList.add("active");
}

function loadTextContent(jsonFile, mainTopic, sideTopic){
    contentArea.innerHTML = `
    <h1>${jsonFile[mainTopic][sideTopic].headline}</h1>
    <section>${jsonFile[mainTopic][sideTopic].content}</section>
`;
}

