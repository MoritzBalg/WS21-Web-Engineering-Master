import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("js-console", class extends LitElement{
    static get properties(){
        return{
            src: {type: URL, reflect: true},
            code:{type: String},
            result:{type: String, refelect: true}
        };
    }

    static styles = css`
        *{
            box-sizing: border-box;
        }

        #wrapper{
            box-sizing: border-box;
            background-color: rgb(0, 0, 0);
            color: white;
            font-family: monospace;
            margin: 0;
            height: 50vh;
            margin-top: 1rem;
        }
        

        #input_section{
            height: 70%;
            white-space: pre;
            overflow-y: scroll;
            padding: 1rem;
        }


        #input_section:focus{
            color: rgb(100, 201, 179);
            border: none;
            outline: none;
        }
        #output{
            height: 30%;
            background-color: rgba(255, 255, 255, 0.8);
            color: black;
            overflow-y: scroll;
            padding: 1rem;

        }

        #output span{
            display: block;
        }

        button{
            border: none;
            height: 1.3rem;
            width: 5rem;
            cursor: pointer;
            margin-bottom: 1rem;
        }

        #clearButton{
            background-color: rgb(221, 152, 152);
        }

        #clearButton:hover{
            background-color: rgb(235, 100, 100);
        }

        #runButton{
            background-color: rgb(160, 221, 152);
        }

        #runButton:hover{
            background-color: rgb(105, 235, 100);
        }
    `;

    constructor(){
        super();
        this.code = "loading ...";
        this.result = "";
       
    }


    async connectedCallback(){
        super.connectedCallback();
        this.loadFile(this.src);
        console.clear();
    }

    

  

    render(){
        
        return html`
        <div id="wrapper">
            <div id="input_section" contenteditable="true" spellcheck="false">
${this.code}
            </div>
            <div id="output">
                <div id="button-section">
                    <button id="clearButton" @click="${()=>{console.clear = ()=>{this.result = ">\n"}; console.clear();}}">Clear</button>
                    <button id="runButton" @click="${()=>{ console.log = (msg)=>{this.result += msg + "\n"}; eval(this.shadowRoot.querySelector('#input_section').innerText);}}">Run</button>
                </div>
                <div id="output_section">
                    <pre>${this.result}</pre>
                </div>
            </div>
        </div>
        
        `;
    }

    async loadFile(url){
        const request = await fetch(url);
        const data = await request.text();
        this.code = "";
        this.code += data;
        return data;
    }

})