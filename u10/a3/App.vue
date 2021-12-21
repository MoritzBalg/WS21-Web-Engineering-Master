<template>
  <div id="app" :style="cssVars">
    <header>
      <h1>WWW-Navigator</h1>
      <nav><HVMenu horizontal=true v-bind:values="Object.keys(this.json)" @changeTopic="changeTopic"></HVMenu></nav>
    </header>
    <div id="mainWrapper">

      <aside><HVMenu v-bind:values="Object.keys(this.json[this.sTop])" @changeTopic="changeSubTopic"></HVMenu></aside>
      <main id="content" v-if="this.json">
        <content-shower v-bind:headline="this.sTop.toUpperCase()"
                        v-bind:subline="this.sSubTop.toUpperCase()"
                        v-bind:content="this.json[this.sTop][this.sSubTop].content"
        />
      </main>

  </div>
  </div>
</template>

<script>
import json from "./content.json";
import HVMenu from "./components/HVMenu";
import ContentShower from "./components/ContentShower";
export default {
  name: "app",
  components: {ContentShower, HVMenu},
  computed: {
    cssVars() {
      return {
        '--primary_color': this.primColor,
        '--secondary_color': this.secColor
      }
    }
  },
  data(){
    return{
      sTop: 'html',
      sSubTop: 'headings',
      selectedTopic: 'html',
      selectedSubTopic: 'headings',
      content: 'Lorem',
      counter: 'html',

      json: json
    }
  },
  methods: {
    async fetchJson(url){
      const req = await fetch(url);
      if(req.ok){
        return await req.json();
      }
      return null;
    },
    changeTopic(e){
      this.sTop = e
      this.sSubTop = Object.keys(this.json[this.sTop])[0]
    },
    changeSubTopic(e){this.sSubTop = e}
  },
  props: {
    primColor: {
      type: String,
      default: "#0d4072"
    },
    secColor: {
      type: String,
      default: "#e1dfdf"
    }
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
<style scoped>
#app{
font-family: "Arial" , sans-serif;
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
</style>