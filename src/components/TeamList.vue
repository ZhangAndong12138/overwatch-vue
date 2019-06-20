<template>
  <div id="team-list">
    <div class="team-tab">
      <router-link v-for="comp in teams.competitors" :to="'/teamdetail/' + comp.competitor.id" :key="comp.competitor.id">
        <TeamTab  :teaminf="comp.competitor" ></TeamTab>
      </router-link>
    </div>
    <!-- <div class="team-detail">
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
import TeamTab from './TeamTab'
export default { 
  name: 'TeamList',
  components: {
    TeamTab
  },
  data () {
      return {
        teams: {competitors:[]}
      }
  },
  created () {
    this.axios.get('https://api.overwatchleague.cn/teams?locale=zh_CN')
    .then(response => (this.teams = response.data))
    .catch(function (error){
      console.log(error);
    });
  }
}
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
