fetch('../out/main.wasm').then(response =>
    response.arrayBuffer()
  ).then(bytes => WebAssembly.instantiate(bytes)).then(results => {
    instance = results.instance;
    const container = document.getElementById("container");
  
    for(let i = 1; i <= 100; i++){
      for(let j = 1; j<=100; j++){
        container.textContent += "i:" + i + " j:" + j + " \t" + instance.exports.ggt(i,j) + "\n";
      }
    }
    
  }).catch(console.error);
  
  