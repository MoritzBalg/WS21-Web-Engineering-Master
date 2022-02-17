import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("simple-counter", class extends LitElement{
    static get properties(){
        return{
            counter: {type: Number}
        };
    }

    static styles = css`
        :host{
            display: inline-block;
        }
    
        p{
        }
    `;

    constructor(){
        super();
        this.counter = 1;
        this.addEventListener("click", ()=>this.counter +=1);
    }

    render(){
        return html`
            <p>${this.counter}</p>
        `;
    }
})