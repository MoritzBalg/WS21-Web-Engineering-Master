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
        }
        

        #input_section{
            height: 70%;
            
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
       
        console.log = (msg)=>{
            this.result += msg + "\n";
        };

        console.clear = ()=>{
            this.result = ">\n";
        }
       
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
                //JS Live Editor <br>
                //==================== <br>
                <pre>${this.code}</pre>
            </div>
            <div id="output">
                <div id="button-section">
                    <button id="clearButton" @click="${()=>{console.clear()}}">Clear</button>
                    <button id="runButton" @click="${()=>{eval(this.shadowRoot.querySelector('#input_section > pre').innerText)}}">Run</button>
                </div>
                <div id="output_section">
                    <pre>${this.result}</pre>
                </div>
            </div>
        </div>
            <script>

                const btn_run = document.getElementById("runButton");
                const btn_clear = document.getElementById("clearButton");
                const output_section = document.getElementById("output_section");
                const input_section = document.getElementById("input_section");
        
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