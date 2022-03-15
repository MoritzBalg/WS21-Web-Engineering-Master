import {html, LitElement} from "lit"
customElements.define("embed-browser", class extends LitElement{
    static get properties(){
        return{
            src: {type: URL, reflect: true},
            orientation: {type: String, reflect: true}
        };
    }

    constructor(){
        super();
        this.src = "";
        this.orientation = "landscape"

    }

    render(){
        return html`
            <style>
                iframe{
                    aspect-ratio: ${this.orientation === "landscape" ? 16/9 : 9/16};
                    width: 50%;
                }
            </style>
            <div part="wrapper">
                <iframe part="frame" src="${this.src}" frameborder="0"></iframe>
            </div>
            
        `;
    }
})