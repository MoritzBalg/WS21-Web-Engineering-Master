import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("tab-element", class extends LitElement{
    static get properties(){
        return{
            titel: {type: String, Reflect: true},
            selected: {type: Boolean, Reflect: true},
        };
    }

    constructor(){
        super();

    }


    render(){
        return html`
            <slot></slot>
        `;
    }
})