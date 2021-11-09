let mainContent;
let subContent;
let contentCon;
let content ;
let mainTopics = [];

window.addEventListener("load", async ()=> {
     mainContent = document.getElementById("mainTopics");
     subContent = document.getElementById("subTopics");
     contentCon = document.getElementById("content");
     content = await fetchJSON("Aufgabe4.json");

     let i = 0;
     for(const key in content){
         mainTopics[i] = key;
         i++;
     }
     await buildTopics(mainTopics, mainContent);


});


async function buildTopics(topics, nav){

    if(topics){
        let li;
        topics.forEach(element => {
            li = document.createElement("li");
            li.textContent = element;
            nav.appendChild(li);
            li.addEventListener("click",()=>loadSubTopics(element, subContent));
        });
    }
}

async function fetchJSON(url) {
    const request = await fetch(url);
    if(request.ok){
        return await request.json();
    }
    return null;
}

 function loadSubTopics(key, nav){
    const sub = content[key];
    let element;
    nav.innerHTML = "";
    for(let p in sub){
        element = document.createElement("li");
        element.innerText = p;
        nav.appendChild(element);
        element.addEventListener("click", ()=>{
            loadContent(key, p);
            history.pushState({key1: key, key2: p},p);
        });
    }
}

function loadContent(topKey, subKey){
    const inhalt = content[topKey][subKey];
    console.log(inhalt);
    contentCon.innerText = inhalt.content;
    contentCon.innerHTML += "<hr></hr><h3>Referenzen</h3>";
    let a;
    for(let p of inhalt.references){
        a = document.createElement("a");
        a.href = p;
        a.style.display = "block";
        a.innerText = p;
        contentCon.appendChild(a);
    }


}

window.addEventListener("popstate", (event)=>{
    loadContent(event.state.key1, event.state.key2);
})


