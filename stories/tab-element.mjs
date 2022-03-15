import {html, css, LitElement} from 'lit'
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