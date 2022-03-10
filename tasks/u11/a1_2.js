fetch('/tasks/u11/a1_1.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
    instance = results.instance;
    const ul = document.querySelector("ul");
  
    for(let i = 1; i <= 100; i++){
      for(let j = 1; j<=100; j++){
        const li = document.createElement("li");
        li.innerText = "i:" + i + " j:" + j + " \t" + instance.exports.ggt(i,j);
        ul.appendChild(li);
      }
    }
    
  }).catch(console.error);
  
  