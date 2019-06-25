<template>
  <div id="player-tab" class="player-tab">
    <div class="blocked">
      <el-image :src="playerinf.headshot"></el-image>
    </div>
    <h2 v-html="roleAndName(playerinf.role, playerinf.name)" :style="{color:fontColor}"></h2>
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
  methods: {
    roleAndName(role,name){
      let icon = "";
      if(role === "offense"){
        icon = "el-icon-aim";
      }else if(role === "support"){
        icon = "el-icon-first-aid-kit";
      }else if(role === "tank"){
        icon = "el-icon-c-scale-to-original";
      }else{
        icon = "el-icon-copy-document";
      }
      return "<i class=" + icon + " title=" + role + "></i>&nbsp;" + name;
    }
    
  },
  props: {
    playerinf: Object,
    fontColor: String
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

/* h2{
  color: #000000;
} */

</style>
