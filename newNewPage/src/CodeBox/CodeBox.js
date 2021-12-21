import {html, css, LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module';

class CodeBox extends LitElement {
    static get styles(){
        return css`

          #mainWrapper {
            border: 1px solid rgb(207, 207, 207);
            box-shadow: rgb(207 207 207 / 66%) 5px 5px 10px 1px;
            padding-left: 2vw;
            padding-right: 2vw;
            margin: 3vh;
          }

          .innerBox {
            width: 100%;
            border: 1px solid rgb(207, 207, 207);
            margin-bottom: 2vh;
          }

          header {
            display: flex;
            flex-direction: row;
            align-items: baseline;
            justify-content: space-between;
          }

          #codeLanguage {
            color: purple;
          }


          #codeContent > pre {
            font-family: monospace;
            margin: 0;
            white-space: break-spaces;
          }
          
          #code{
            display: none;
          }

          button {
            margin-bottom: 2vh;
            margin-right: 1vw;
            width: 10em;
            background-color: white;
            border: 1px solid rgb(207, 207, 207);
          }

          button:hover {
            cursor: pointer;
            animation: pulse 2s infinite;
            color: white;
          }

          @keyframes pulse {
            0% {
              background-color: #3fa80d;
            }
            50% {
              background-color: #1c5902;
            }
            100% {
              background-color: #3fa80d;
            }
          }

        `;
    }

    static get properties() {
        return {
            runnable: {type: Boolean},
            headline: {type: String},
            language: {type: String},
            src: {type: String},
            contentFile: {type:String},
            prevHight: {type:Number}
        };
    }

    constructor() {
        super();
        this.runnable = false;
        this.language = "";
        this.prevHight = 800;
        this.src = "";
        this.headline = "Code Beispiel"
        this.contentFile = "Lade Datei..";
    }

    render(){
        const runBtn = html`<button @click='${this.runHandler}' id="btnRun">Run</button><button style="display: none" @click='${this.abortHandler}' id="btnAbort">Abbrechen</button>`;
         fetch(this.src)
            .then(res => res.ok?res.text():this.contentFile = "Die angegebene Datei konnte nicht gefunden werden!")
            .then(file => this.contentFile = file);


        return html`
            <div id="mainWrapper">
                
                <header>
                    <h4>${this.headline}</h4>
                    <span id="codeLanguage">${this.language}</span>
                </header>
                <section id="codeContent">
                    <pre>${this.contentFile}</pre>
                </section>
                <iframe id="code" height="${this.prevHight}px" class="innerBox" src="${this.src}">
                    Hello World
                </iframe>
                ${this.runnable?runBtn:""}
            </div>
        `;


    }
    runHandler(){
        this.shadowRoot.getElementById("code").setAttribute("style", "display:inline");
        this.shadowRoot.getElementById("btnAbort").setAttribute("style", "display:inline")
    }

    abortHandler(){
        this.shadowRoot.getElementById("code").setAttribute("style", "display:none");
        this.shadowRoot.getElementById("btnAbort").setAttribute("style", "display:none");
    }



}

customElements.define("code-box", CodeBox);