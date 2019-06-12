<template>
  <div id="team-tab" :style="tabStyle">
    <img :src="teaminf.logo" />
    <h3 v-html="teaminf.name"></h3>
  </div>
</template>

<script>

export default {
  name: 'TeamTab',
  data () {
    return {
      tabStyle:{
        color : '#'+this.teaminf.secondaryColor
      }
    }
  },
  props: {
    teaminf: Object
  },
}
</script>

<style scoped>
img {
  width: 75px;
  height: 75px;
}

div {
  float: left;
  margin: 15px;
  width: 30%;
}

div:hover {
  transform: scale(1.1);
}
</style>
