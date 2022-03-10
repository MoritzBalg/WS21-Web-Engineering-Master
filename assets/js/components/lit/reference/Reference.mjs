import {html, css, LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
customElements.define("reference-source", class extends LitElement{
    static get properties(){

//author="Daniel Herken" page="127" year="2021"
//Herken, Daniel (2021): JavaScript Kompendium: Professionell JavaScript Programmieren lernen, sss, sss: BMU Verlag.

        return{
            author: {type: String, reflect: true},
            page: {type: String, reflect: true},
            year: {type: Number, reflect: true},
            url: {type: URL, reflect: true}
        };
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
    }

    render(){
        return html`
            ${this.author.split(" ")[1] === undefined?"":this.author.split(" ")[1] + ", "} ${this.author.split(" ")[0]} (${this.year===undefined?"o.J":this.year}): <slot></slot> ${this.url === undefined ? "":html`[<a href="${this.url}">Link</a>]`}
            
        `;
    }
})