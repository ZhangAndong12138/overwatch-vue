<template>
  <div id="team-list">
    <TeamTab v-for="(comp, index) in teams.competitors" :teaminf="comp.competitor" :key="index"></TeamTab>
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
    this.axios.get('https://api.overwatchleague.cn/teams')
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
  }
</style>
