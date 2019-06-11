<template>
  <div id="team-tab">
    <img :src="teaminf.logo" />
    <h4 v-html="teaminf.name"></h4>
  </div>
</template>

<script>

export default {
  name: 'TeamTab',
  components: {
    
  },
  props: {
    teaminf: Object
  }
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}

div {
  float: left;
  margin: 15px;
}
</style>
