<template>
  <div id="team-list">
    <el-button @click="toShowList()">back</el-button>
    <div class="team-tab" v-show="!showDetail">
      <div
        v-for="team in teams"
        :key="team.id"
        @click="toShowDetail(team.id)"
      >
        <TeamTab :teaminf="team"></TeamTab>
      </div>
    </div>
    <div class="team-detail" :v-show="showDetail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TeamTab from "./TeamTab";
export default {
  name: "TeamList",
  components: {
    TeamTab
  },
  data() {
    return {
      teams: { },
      showDetail: false
    };
  },
  methods: {
    toShowDetail: function(id) {
      this.$router.push('/teamdetail/' + id);
      this.showDetail = true;
    },

    toShowList: function(){
      this.$router.go(-1);
      this.showDetail = false;
    }
  },
  created() {
    this.axios
      .get("https://api.overwatchleague.cn/v2/teams?locale=zh_CN")
      .then(response => (this.teams = response.data.data))
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.team-list {
  width: 100%;
  height: 100%;
  margin: 10px;
  background-color: cornflowerblue;
  float: left;
}

.team-tab {
  width: 100%;
  height: 100%;
  float: left;
}
</style>
