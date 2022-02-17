import inputValidator from "./inputValidator.mjs"
export default {
    template: `
        <div>
        <h1>Texteingabe</h1>
        <label>Eingabe:</label>
        <input type="text" ref="inputField" @input="update">
        <label>Anzahl an <b>Buchstaben</b>:</label>
        <p>{{letters}}</p>
        <label>Anzahl an <b>Leerzeichen</b>:</label>
        <p>{{spaces}}</p>
        <label>Anzahl an <b>Worten</b>:</label>
        <p>{{words}}</p>    
        </div>
`,
    data(){return{
        letters: 0,
        spaces: 0,
        words: 0,
        }
    },
    methods: {
        update(){
        const field = this.$refs.inputField.value;
        this.letters = field.length;
        this.spaces = field.split(" ").length-1;
        this.words = field.split(" ").length;
        }
    }
}

new Vue({
    el: "#app",
    components: {
        inputValidator
    }
});