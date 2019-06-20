<template>
  <div id="player-tab">
    <img :src="playerinf.headshot">
    <h3 v-html="'NO.' + playerinf.attributes.player_number + ' '+playerinf.name"></h3>
    <h4 v-html="playerinf.attributes.role"></h4>
    <span
      v-for="(hero, index) in playerinf.attributes.heroes"
      :key="index"
      v-html="hero.name + ' '"
    ></span>
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

div {
  float: left;
  margin: 15px;
  width: 22%;
  background-color: #ffffff;
}

div:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
