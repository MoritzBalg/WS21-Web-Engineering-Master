import {html, css, LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module';
import {ContentBox} from "../Contenbox/ContentBox.js";

class TaskBox extends ContentBox {


    static get styles() {
        return css`
          :host {
            --primary_color: #b7b7b7;
            --secondary_color: #41b4dc;
          }
          
          #wrapper{
            width: 98%;
            border: 1px solid #cfcfcf;
            box-shadow: 5px 5px 10px 1px rgba(207,207,207,0.66);
            padding: 1vw;
            position: relative;
            margin: 4vh auto 0;
          }
          
          
          #wrapper > h2{
            position: absolute;
            top: -1.5em;
            font-size: 4vh;
            
          }
        `;
    }

    static get properties() {
        return {
            headline: {type: String},
            refs: {type: Array},
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
    }
    render() {

        return html`
            <div id="wrapper">
                <h2 style="background-color:${this.parentBackgroundColor}">${this.headline}</h2>
                <section id="content" style="margin-top: ${!this.headline?1:2}vh">
                    <slot>${this.innerHTML}</slot>
                </section>
            </div>
        `;
    }
}
customElements.define("task-box", TaskBox);