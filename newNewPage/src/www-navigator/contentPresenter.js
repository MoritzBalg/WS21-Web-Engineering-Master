import {html, css, LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module';

class ContentPresenter extends LitElement {


    static get styles() {
        return css`
          main{
            animation: flyin 2.5s;
          }

          #mainWrapper > h1{
            text-align: center;
            margin-bottom: 1em;
          }

          @keyframes flyin {
            0%{
              opacity: 0;
            }
          }
        `;
    }
    static get properties() {
        return {
            headline: {type: String},
            src: {type: String},
        };
    }

    constructor() {
        super();
        this.headline = "";
        this.parentBackgroundColor = window.getComputedStyle( this.parentNode ).backgroundColor;
        if(this.parentBackgroundColor === "rgba(0, 0, 0, 0)"){
            //Es gibt keine Farbe
            this.parentBackgroundColor = "#ffffff"
        }
        if(this.src){
            (async ()=>{
                this.jsonContent = await fetchJSON(this.src);
            })();
        }


    }
    render() {

        return html`
            <div id="mainWrapper">
                <h1>${this.headline}</h1>
                <main id="mainContainer">
                    
                </main>
            </div>
        `;
    }
}

async function fetchJSON(url){
    const request = await fetch(url);
    if(request.ok){
        return await request.json();
    }
}
customElements.define("content-presenter", ContentPresenter);