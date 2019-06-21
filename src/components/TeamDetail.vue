<template>
  <div id="team-detail">
    <div :style="{background:teamdata.colors.primary.color}" class="team-header">
      <el-row :style="{color:teamdata.colors.secondary.color}">
        <el-col :span="3">
          &nbsp;
        </el-col>
        <el-col :span="9">
          <el-image :src="teamdata.logo.mainName.svg" fit="contain"></el-image>
        </el-col>
        <el-col :span="6">
          <h1>&nbsp;</h1>
          <h4>赛区</h4>
          <h1 v-html="teamdata.divisionId === 80 ? '太平洋赛区' : '大西洋赛区'"></h1>
          <h4>城市</h4>
          <h1 v-html="teamdata.location"></h1>
        </el-col>
        <el-col :span="6">
          <h1>&nbsp;</h1>
          <h4>战绩</h4>
          <h1 v-html="teamdata.records.matchWin + '胜-' + teamdata.records.matchLoss + '负' "></h1>
          <h4>排名</h4>
          <h1 v-html="'#' + teamdata.placement"></h1>
        </el-col>
      </el-row>
    </div>
    <div class="player-tabs">
      <PlayerTab v-for="player in teamdata.players" :key="player.id" :playerinf="player"></PlayerTab>
    </div>
    <button @click="log">console.log</button>
  </div>
</template>

<script>
import PlayerTab from "./PlayerTab";
import { watch } from "fs";

export default {
  name: "TeamTab",
  components: {
    PlayerTab
  },
  data() {
    return {
      teamdata: {
        colors: {
          primary: {
            color: "#ffffff"
          },
          secondary: {
            color: "#000000"
          }
        },
        logo: {
          mainName: {
            svg: "",
            png: ""
          }
        }
      },
      teamid: this.$route.params.teamid
    };
  },
  props: {
    //teamid: String
  },
  methods: {
    log: function() {
      console.log(this.teamdata);
    }
  },
  
  mounted() {
    this.axios
      .get(
        "https://api.overwatchleague.cn/v2/teams/" +
          this.teamid +
          "?expand=article,schedule&locale=zh_CN"
      )
      .then(response => (this.teamdata = response.data.data)) //
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.team-header {
  padding: 20px;
  border-radius: 5px;
}
.el-image {
  width: 250px;
  height: 250px;
}

</style>
