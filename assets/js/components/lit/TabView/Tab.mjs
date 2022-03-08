import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("simple-tab", class extends LitElement{
    static get properties(){
        return{
            title: {type: String, reflect: true},
            active: {type: Boolean, reflect: true} 
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
            <span>${this.title}</span>
            <slot></slot>
        `;
    }
})