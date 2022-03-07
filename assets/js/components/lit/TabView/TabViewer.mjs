import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("tab-viewer", class extends LitElement{

    get tabs(){
        const slot = document.querySelector("slot");
        console.log(slot);
        return slot? slot.assignedElements() : [];
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
            <h1>${this.tabs}</h1>
            <slot></slot>
        `;
    }
})