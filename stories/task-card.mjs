import {html, css, LitElement} from "lit"
customElements.define("task-card", class extends LitElement{
    static get properties(){
        return{
            img: {type: String},
            tags: {type: String}
        };
    }

    static styles = css`
    :host{
        --width: 200px;
        --circle-width: calc(var(--width)*3);
        display: inline-block;
    }

    #taskcard{
        background-color: hsl(60, 1%, 14%);
        color: whitesmoke;
        display: inline-flex;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 1rem;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 2px 2px 5px 0 rgba(0,0,0,.2);
    }

    #taskcard > img {
        height: var(--width);
        aspect-ratio: 1 / 1;
           
    }

    #taskcard p, span, img, #content{
        z-index: 1;
    }

    #content{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    #taskcardcircle{            
        position: absolute;
        height: var(--circle-width);
        aspect-ratio: 1 / 1 ;
        background-color: rgba(100, 100, 100 , 1); 
        display: block;
        border-radius: 100%;
        transform: translateY(var(--width));
        animation: rise 3s infinite;
        animation-play-state: paused;
    } 
    .anim-play{
        animation-play-state: running;
    }

    @keyframes rise {
        0%, 100%{
            transform: translateY(calc(--width));
        }
        
        50%{
            transform: translateY(calc(var(--width) + 50px));
        }
    }

    h3{
        background-color: #3a6c64;
        margin: 0 -1em;
        text-align: center;
        padding: .5rem;
    }
    `;

    constructor(){
        super();
        this.img = "";
        this.tags = [];
        this.addEventListener("mouseover", ()=>{
            this.renderRoot.querySelector("#taskcardcircle").style.animationPlayState = "running";
        });
        
        this.addEventListener("mouseleave", ()=>{
            this.renderRoot.querySelector("#taskcardcircle").style.animationPlayState = "paused";
        });
    }

    render(){
        return html`
        <div id="taskcard">
            <div id="taskcardcircle" class="anim-stop"></div>
            <img src="${this.img}" alt="">
            <div id="content">
                <h3>${this.textContent}</h3>
                <p>Tags: ${this.tags}</p>
            </div>
        </div>
        `;
    }


})