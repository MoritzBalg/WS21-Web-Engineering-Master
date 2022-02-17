let mainMenu, sideMenu, contentArea, btn_hideMenu;

window.addEventListener("load", async _=>{
    const content = await loadContent("./content.json");
    //get main and side menu to load them with the content
    mainMenu = document.getElementById("main-menu");
    sideMenu = document.getElementById("side-menu");
    aside = document.getElementById("main-aside");
    contentArea = document.getElementById("content-area");
    btn_hideMenu = document.getElementById("hide-menu");




    btn_hideMenu.addEventListener("click",()=>{
        aside.style.display = aside.style.display=="none"?"block":"none";
    })



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


async function loadHTML(url){
    const request = await fetch(url);
    if(request.ok){
        try {
            return await request.text();   
        } catch (error) {
            console.error("Invalid Text Format in " + url);
    }
    }else{
        console.error("Fail to fetch File " + url);
    }
}

function loadMainTopics(menuElem, jsonFile){
   // menuElem.innerHTML = ""; //only the last call of this function will resut in the navigation
    for(let key in jsonFile){
        const entry = document.createElement("li");
        entry.innerText = key.toUpperCase();
        entry.addEventListener("click", ()=>{
            loadSideTopics(sideMenu, jsonFile, key);
            document.querySelectorAll("#main-menu .active").forEach(n => n.classList.remove("active"));
            entry.classList.add("active"); 
            aside.style.display = "block";

        }); 
        menuElem.insertBefore(entry, btn_hideMenu);
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

async function loadTextContent(jsonFile, mainTopic, sideTopic){
    const textFile = await loadHTML(jsonFile[mainTopic][sideTopic].content);
    contentArea.innerHTML = `
    <h1><typing-field>${jsonFile[mainTopic][sideTopic].headline}</typing-field></h1>
    <section>${textFile}</section>
`;
}

