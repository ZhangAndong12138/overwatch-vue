<template>
  <div id="team-list">
      <router-link v-for="team in teams" :key="team.id" :to="'/teamdetail/' + team.id">
        <TeamTab :teaminf="team"></TeamTab>
      </router-link>
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
    toShowList: function(){
      this.$router.go(-1);
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
</style>
