<template>
  <div id="appWrap">
    <ul :class="{horizontal: this.horizontal, vertical: !this.horizontal}">
      <li @click="$emit('changeTopic', elem)" v-for="elem in this.values" :key="elem.id">{{elem}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HVMenu",
  data(){
    return {select: ""}
  },
  props: {
    values:{
      type: Array
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
    display: flex;
    gap: 1em;
    width: 100%;
    margin: 0;
    padding: 2em;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
  }

  .horizontal{
    flex-direction: row;
  }

  .vertical{
    flex-direction: column;
  }

  li{
    background-color: #c5bfbf;
    display: inline-flex;
    height: 2em;
    width: 10em;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  li:hover{
    background-color: #868686;
    cursor: pointer;
  }
</style>