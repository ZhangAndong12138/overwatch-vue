<template>
  <div id="team-tab" :style="tabStyle">
    <img :src="teaminf.logo" />
    <span v-html="teaminf.name"></span>
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
  width: 25px;
  height: 25px;
  float: left;
}

span {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  float: left;
}

div {
  float: left;
  margin: 7px;
  width: 100%;
}

div:hover {
  transform: scale(1.1);
}
</style>
