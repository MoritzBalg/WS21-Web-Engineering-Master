const template = document.createElement("template");
template.innerHTML = `
    <!-- Style section -->
    <style>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

        div{
            display: inline-block;
            white-space: pre;
            font-family: monospace;
            background-color: LightGrey;
            padding: 1rem;
            border-radius: 1rem;
        }

        h3{
                margin-bottom: 1rem;
        }
    </style>



    <div><slot name="title"></slot><slot></slot></div>
`; 
customElements.define("file-viewer", class extends HTMLElement{

    static observedAttributes = ["title" ,"src", "runnable"];

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.appendChild(template.content.cloneNode(true));
        this.src = this.getAttribute("src");
        this.runnable = this.hasAttribute("runnable");
    }

    connectedCallback(){
        if(this.hasAttribute("src")){
            this.loadFile(this.src);
        }
    }

    generateLineNumbers(){
        this.textContent = "\n" + this.textContent;
        let line = this.textContent.split("\n");
        console.log("line")
        this.textContent = "";
        //indices will remove the additional linebreaks
        for(let i = 0; i < line.length; i++){
            this.textContent += `${i}\t${line[i]} \n`;
        }
    }

    attributeChangedCallback(name, oldVal, newVal){
        if(oldVal != newVal){
            switch(name){
                case "title": this.title = newVal; break;
                case "src": this.src = newVal; break;
                case "runnable": this.runnable = newVal; break;
            }
            this.update()
        }
    }

    update(){
        if(this.title != "null"){ //title is set
            this.shadow.querySelector("slot[name='title']").innerHTML = `<h3>${this.title}</h3>`;
        }

        if(this.runnable){
            console.log("start me");
        }
    }

    loadFile(url){
        fetch(url)
        .then((resp)=>{
            if(resp.ok){
                return resp.text();
            }else{
                throw Error("Unable to load file");
            }
        })
        .then((text)=>{
            this.textContent = text;
            this.generateLineNumbers();
            if(!this.hasAttribute("title")){
                this.setAttribute("title", url);
            }
        });
    }

});