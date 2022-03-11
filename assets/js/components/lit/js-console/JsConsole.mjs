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
        div{
            background-color: black;
            color: white;
            font-family: monospace;
            height: 100%;
            padding: 1rem;
        }
    `;

    constructor(){
        super();
        this.result = "";
    }

    async loadContent(){
        const response = await fetch(this.src);
        let data = await response.text();
        this.code = data;
    }

    async connectedCallback(){
        super.connectedCallback();
        this.code = "Loading...";
        await this.loadContent();
        eval(this.code)
        this.rerouteConsoleLog();
    }


    render(){
        return html`
            <div id="wrapper">
            JS Console
            <hr/>
            <pre>${this.code}</pre>
            <hr/>
            <pre>${this.result}</pre>
            </div>
        `;
    }

    rerouteConsoleLog(){
        console.log = msg=>{
            this.result += msg + "\n";
        };
        console.log(22)
    }
})