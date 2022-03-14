import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("www-navigator", class extends LitElement{
    static get properties(){
        return{
            src: {type: String},
            main: {type: String},
            side: {type: String},
            json: {type: JSON},
            content: {type: String}
        };
    }

    static styles = css`
    :host{
        display: grid;
        grid-template-areas: 
                "header header header"
                "aside main main"
                ;
        grid-template-rows: auto 1fr;
        grid-template-columns: auto 1fr;
        min-height: 100vh;
        
    }

    header{
        background-color: rgb(36, 33, 33);
        grid-area: header;
        padding: 1rem;
    }

    #mainMenu ul{
        display: flex;
    }

    #sideMenu ul{
        display: flex;
        flex-direction: column;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    li{
        background-color: steelblue;
        color: whitesmoke;
        border-radius: 3px;
        padding: .5rem;
        margin:  0.5rem;
        text-align: center;
        cursor: pointer;
        min-width: 10rem;
    }

    li:hover{
        background-color: rgb(28, 63, 92);

    }

    main{
        background-color: rgb(149, 141, 156);
        grid-area: main;
        padding: 1rem;
    }

    aside{
        background-color: rgb(36, 33, 33);
        grid-area: aside;
        padding: .5rem;
    }
    `;

    constructor(){
        super();
        this.content = "loading...";
        this.headline = "loading...";
        this.src = "";
    }

    async connectedCallback(){
        super.connectedCallback();
        this.json = await this.loadJSON();
        this.main = Object.keys(this.json)[0];
        this.side = Object.keys(this.json[this.main])[0];
        this.content = this.getContent(this.main, this.side);
        
    }

    get sideMenu(){
        return Object.keys(this.json[this.main]);
    }

    get mainMenu(){
        return Object.keys(this.json);
    }

    getContent(main, side){
        try{
            return this.json[main][side].content;
        }catch(Error){
            console.error(Error);
        }
        
    }

    async loadJSON() {
        const request = await fetch(this.src);
        const data = await request.json();
        return data;
    }

    render(){
        return html`
                <header>
                    <nav id="mainMenu">
                        <ul>
                            ${this.mainMenu.map((entry)=>{return html `<li @click=${()=>{
                                this.main = entry;
                                this.side = Object.keys(this.json[this.main])[0];
                                this.content = this.getContent(this.main, this.side);
                            }}>${entry}</li>`})}
                        </ul>
                    </nav>
                </header>
                <aside>
                    <nav id="sideMenu">
                        <ul>
                            ${this.sideMenu.map((entry)=>{return html `<li @click=${()=>{
                                this.side = entry;
                                this.content = this.getContent(this.main, this.side);
                            }}>${entry}</li>`})}
                        </ul>
                    </nav>
                </aside>
                <main>
                    <h1>${this.main.toUpperCase()} - ${this.side.toUpperCase()}</h1>
                        ${this.content}
                    </main>
        `;
    }
})