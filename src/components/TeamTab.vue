<template>
  <div id="team-tab" :style="tabStyle">
      <img :src="teaminf.logo" center=true/>
      <br><br>
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
  width: 110px;
  height: 110px;
}

span {
  font-family: 'Microsoft Yahei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 22px;
}

div {
  text-align:center;
  float: left;
  margin: 15px;
  padding: 15px;
  width: 28%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #eee;
}

div:hover {
  transform: scale(1.1);
}
</style>
