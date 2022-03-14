import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("tab-element", class extends LitElement{
    static get properties(){
        return{
            selected: {type: Boolean, reflect: true},
            title: {type: String, reflect:true}
        };
    }

    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            justify-content: center;
            box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.637);
        }

        #tab-section{
            display: flex;
            flex-wrap: wrap;
        }

        #tab-section span{
            background-color: #326996;
            padding: 1rem;
            flex-grow: 1;
            cursor: pointer;
            color: whitesmoke;
            user-select: none;
        }

        #tab-section span:hover{
            background-color: #173a57;
        }

        #tab-section span[selected]{
            background-color: #173a57;
        }


        #content-section{
            padding: 1rem;
        }
    `;

    constructor(){
        super();
        this.title = "";
        this.selected = false;
    }

    render(){
        return html`
        <div id="tab-section">
            ${this.tabs.map((tab)=>{return html`<span>${tab}</span>`})}
        </div>
        <div id="content-section">
            <slot @slotchange=${() => {this.requestUpdate()}}></slot>
        </div>
        `;
    }

    get tabs(){
        const slot = this.shadowRoot.querySelector('slot');
        return slot ? slot.assignedElements():["a","b","c"];
    }


});

customElements.define("tab-view", class extends LitElement{
    static get properties(){
        return{
            selected: {type: Boolean, reflect: true},
            title: {type: String, reflect:true}
        };
    }

    static styles = css`
        :host:not([selected]){
            display: none;
        }
    `;

    constructor(){
        super();
        this.title = "";
        this.selected = false;
    }

    render(){
        return html`
            <slot></slot>
        `;
    }
});