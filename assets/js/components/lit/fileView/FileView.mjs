import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("file-viewer", class extends LitElement{
    static get properties(){
        return{
            src: {type: String, refelct: true},
            lang: {type: String, refelct: true},
            runnable: {type: Boolean, refelct: true},
            code:{type: String}
        };
    }

    static styles = css`
    #fileViewer{
        background-color: #4b4b4b;
        box-sizing: border-box;
        padding: 1rem;
        color: whitesmoke;
        max-width: 100%;
    }
    
    #fileViewer > div{
        background-color: #b8ccc1;
        color: #4b4b4b;
        font-size: large;
        margin: 0 -1rem;
        padding: .5rem 1rem;
        display: flex;
        justify-content: space-between;
    }

    #fileViewer pre{
        overflow-x: scroll;
        padding: 1rem;
    }
    `;

    async loadContent(){
      const response = await fetch(this.src);
      let data = await response.text();
      data = await this.generateLineNumbers(data);
      this.code = data;
    }


    async connectedCallback(){
        super.connectedCallback();
        this.code = "Loading...";
        await this.loadContent();
        this.lang = this.src.split(".").pop();
    }

    constructor(){
        super();
        this.lang = "";
    }

    render(){
        return html`
        <div id="fileViewer">
        <div>
            <span id="title">${this.textContent}</span>
            <span id="lang">${this.lang.toUpperCase()}</span>
        </div>
        <code><pre>${this.code}</pre></code>
    </div>
        `;
    }

    getFileExtension(uri){
        const numOfDots = uri.split(".").pop();
        return uri.split(".").lenght();
    }

    async generateLineNumbers(text){
        let line = text.split("\n");
        let textWithNumbers = "";
        //indices will remove the additional linebreaks
        for(let i = 0; i < line.length; i++){
            textWithNumbers += `${i+1}\t${line[i]} \n`;
        }
        return textWithNumbers
    }
});