<template>
  <div id="player-tab" class="player-tab">
    <div class="blocked">
      <el-image :src="playerinf.headshot"></el-image>
    </div>
    <h3 v-html="playerinf.name"></h3><!-- '#' + playerinf.number + ' '+ -->
    <!-- <h4 v-html="playerinf.role"></h4> -->
  </div>
</template>

<script>
export default {
  name: "PlayerTab",
  data() {
    return {
      //   tabStyle:{
      //     color : '#'+this.playerinf.secondaryColor
      //   }
    };
  },
  props: {
    playerinf: Object
  }
};
</script>

<style scoped>
img {
  width: 75px;
  height: 75px;
}

.player-tab {
  text-align: center;
  float: left;
  margin: 15px;
  width: 22%;
  background-color: #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.player-tab:hover {
  transform: scale(1.1);
}

</style>
