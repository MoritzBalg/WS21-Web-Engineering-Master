import {html, css, LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module';

class WWWNavigator extends LitElement{


    static get styles(){
        return css`
          
          :host{
            --primary_color: #0d4072;
            --secondary_color: #e1dfdf;
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
          }
          header{
            text-align: center;
            background-color: var(--primary_color);

          }
          header > h1{
            margin: 0;
            color: var(--secondary_color);
          }


          nav > ul{
            list-style: none;
            display: flex;
            padding: 0;
            margin-bottom: 0;
            justify-content: center;
          }

          nav > ul > li{
            background-color: #7dc7dd;
            padding: 1em;
            margin-left: 0.5em;
            margin-right: 0.5em;
            margin-bottom: 1em;
            border-radius: 10px;
          }

          nav > ul > li:hover{
            background-color: #245869;
            color: var(--secondary_color);
            cursor: pointer;
          }

          aside{
            background-color: var(--secondary_color);
            flex: 1 1;
            border-right: 1px solid var(--primary_color);
          }

          main{
            background-color: var(--secondary_color);
            flex: 1 1 80vw;
            padding: 1em;

          }

          aside > ul {
            padding: 0;
            margin: 0;
          }
          aside > ul > li{
            list-style: none;
            background-color: #7dc7dd;
            padding: 1em;
            text-align: center;
          }

          aside > ul > li:hover{
            background-color: #245869;
            color: #fffdfd;
            cursor: pointer;
          }

          #mainWrapper{
            display: flex;
            height: 80vh;
          }
        `;
    }

    static get properties() {
        return { path: { type: String },
                 selectedTopic: { type: String },
                 selectedSubTopic: { type: String },
                 content: { type: Array }};
    }

    constructor() {
        super();
        this.path = "";
        window.addEventListener("popstate", (e)=>{
            if(e.state){
                this.selectedTopic = e.state.selectedTopic;
                this.selectedSubTopic = e.state.selectedSubTopic;
            }else {
                this.selectedTopic = Object.keys(this.content)[0];
                this.selectedSubTopic = Object.keys(this.content[this.selectedTopic])[0];
            }

        })
    }


    render(){
        const mainTopicClickHandler = topic=>{
            this.selectedTopic = topic;
            this.selectedSubTopic = Object.keys(this.content[topic])[0];
            history.pushState({selectedTopic: this.selectedTopic, selectedSubTopic: this.selectedSubTopic}, "#");
        };

        const subTopicClickHandler = topic=>{
            this.selectedSubTopic = topic;
            history.pushState({selectedTopic: this.selectedTopic, selectedSubTopic: this.selectedSubTopic}, "#");
        };

        if(this.content){
            return html`
            <header>
                <h1>WWW-Navigator</h1>
                <nav>
                    <ul id="mainTopics">
                        ${this.buildTopics(Object.keys(this.content), mainTopicClickHandler)}
                    </ul>
                </nav>
            </header>
            <div id="mainWrapper">
                <aside>
                    <ul id="subTopics">
                        ${this.buildTopics(Object.keys(this.content[this.selectedTopic]), subTopicClickHandler)}
                    </ul>
                </aside>
                <main id="content">
                    <h3>${this.selectedSubTopic.toUpperCase()}</h3>

                    ${this.content[this.selectedTopic][this.selectedSubTopic].content}
                </main>
            </div>
        `;
        }else{
            (async ()=>{
                this.content = await this.fetchJSON(this.path);
                this.selectedTopic = Object.keys(this.content)[0];
                this.selectedSubTopic = Object.keys(this.content[this.selectedTopic])[0];
            })();
            return "";
        }
    }

    async fetchJSON(url) {
        const request = await fetch(url);
        if(request.ok){
            return await request.json();
        }
        return null;
    }

    buildTopics(topics, callback){
        return topics.map(topic =>{
           return html`
           <li @click=${()=>callback(topic)}>${topic}</li>
           `;
        });

    }
}
customElements.define("www-navigator", WWWNavigator);





