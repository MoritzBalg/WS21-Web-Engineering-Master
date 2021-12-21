window.addEventListener("load",()=>{
    const path = "./content.json";
    let file;
    (async ()=>{
        file = await fetchJSON(path);
    })();
});

