import menuComponent from "./menuComponent.mjs"
export default {
    template: `
        <div style="display: flex; gap: 10px; justify-content: space-evenly;"  v-bind:style = "{flexDirection: orientation}">
        <button v-if="true" v-for="name in names">
            {{ name }}
        </button>    
        </div>
`,
    props:
        {
            orientation: {type: String, default: "Hallo"},
            names: {type: Array},
        },
}
new Vue({
    el: "#app",
    components: {
        menuComponent
    }
});