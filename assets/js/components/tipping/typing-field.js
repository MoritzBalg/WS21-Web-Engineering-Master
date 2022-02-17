const template = document.createElement("template");
template.innerHTML  = `
    <style>

    #cursor{
        animation: blink 1s steps(1) infinite;
        /*realign pipe symbol*/
        transform: translateY(-.1rem); 
        display: inline-block;
        color: white;
    }

    @keyframes blink{
        50%{
        opacity: 0;
        }
    }
    </style>

    <span id="text"><slot></slot></span><span id="cursor">|</span>     
`;

customElements.define("typing-field", class extends HTMLElement{

    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        const content = this.textContent;
        const length = content.length;
        this.innerText = "";
        const typingFun = (character)=>{this.textContent += character};

        for(let i = 0; i < length; i++){
            setTimeout(typingFun, 100*(i+1), content[i]);
        }
    }
});