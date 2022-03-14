import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("tab-view", class extends LitElement{
    static get properties(){
        return{
            counter: {type: Number}
        };
    }

    static styles = css`
        :host{

            display: flex;
            flex-direction: column;
            justify-content: center;
        }


        #tabs{
            display: flex;
            flex-direction: row;

        }

        #tabs span{
            background-color: var(--primary-color);
            padding: var(--padding);
            flex-grow: 1;
            cursor: pointer;
            user-select: none;
            color: white;
        }

        #tabs span:hover{
            background-color: var(--primary-color-hover);
            color: white !important;
        }

        #tabs span[selected]{
            background-color: var(--primary-color-hover);
            
        }

        #tabs span:not([selected]){
            color: #3a6c64;
        }

        #display{
            background-color: var(--secondary-color);
            padding: var(--padding);
        }

        ::slotted(:not(*[selected])) {
            display: none;
          }
    `;

    constructor(){
        super();

    }

    connectedCallback(){
        super.connectedCallback();

    }

    selectTab(newTab){
        const oldTab = this.shadowRoot.querySelector("#tabs span[selected]");
        const slot = this.shadowRoot.querySelector("slot").assignedElements();
        for(let elem of slot){
            elem.removeAttribute("selected");
            if(newTab.textContent === elem.getAttribute("tab-title")){
                elem.setAttribute("selected", "");
            }
        }

        oldTab.removeAttribute("selected");
        newTab.setAttribute("selected","");
    }

    firstUpdated(){
        const slot = this.shadowRoot.querySelector("slot");
        const tabSection = this.shadowRoot.querySelector("#tabs");
        const content = slot.assignedElements();
        for(let elem of content){
            const span = document.createElement("span");
            span.innerHTML = elem.getAttribute("tab-title");
            tabSection.appendChild(span);
            span.addEventListener("click", ()=>this.selectTab(span))
        } 
        //activate first Tab
        tabSection.childNodes[0].setAttribute("selected", "");
        content[0].setAttribute("selected", "");

        
    }

    render(){
        return html`

        <div id="tabs" part="tabs"></div>
        <div id="display">
            <slot></slot>
        </div>

        `;
    }
})