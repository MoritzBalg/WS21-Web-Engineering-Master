import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("tab-field", class extends LitElement{
    static get properties(){
        return{
            titel: {type: String, reflect: true},
            selected: {type:Boolean, reflect: true}
        };
    }

    static styles = css`
        :host{
            display: inline-block;
        }
    `;
    
    render(){
        return html`
            <slot></slot>
        `;
    }
})