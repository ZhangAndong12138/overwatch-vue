<template>
  <div id="team-detail"><!-- :style="detailStyle" -->
    <img :src="teamdata.logo" />
    <h1 v-html="teamdata.name"></h1>
    <div>
        <PlayerTab v-for="player in teamdata.players" :key="player.id" :playerinf="player"></PlayerTab>
    </div>
  </div>
</template>

<script>
import PlayerTab from './PlayerTab'

export default {
  name: 'TeamTab',
  components:{
      PlayerTab
  },
  data () {
    return {
      teamdata: {
          secondaryColor: 'ffffff',
          name: ''
      },
    //   detailStyle:{
    //     background : '#'+this.teamdata.secondaryColor
    //   }
    }
  },
  props: {
    teamid: String
  },
  mounted () {
    this.axios.get('https://api.overwatchleague.cn/teams/' + this.teamid)
    .then(response => (this.teamdata = response.data))//
    .catch(function (error){
      console.log(error);
    });
  }
}
</script>

<style scoped>
img{
    width: 150px;
    height: 150px;
}
</style>
