<template>
  <div id="appWrap">
    <h2>{{headline}}</h2>
    <h3>{{subline}}</h3>
    <section>
      {{content}}
    </section>
  </div>
</template>

<script>
export default {
  name: "ContentShower",
  data(){
    return{

    }
  },
  methods: {

  },
  props: {
    headline: {
      type: String,
      default: "Headline"
    },
    subline: {
      type: String,
      default: "Sublinie"
    },
    content: {
      type: String,
      default: "Content Lorem ipsum..."
    }
  }
}
</script>