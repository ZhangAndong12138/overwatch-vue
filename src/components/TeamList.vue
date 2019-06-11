<template>
  <div id="team-list">
    <TeamTab v-for="comp in competitors" v-bind:teaminf="comp.competitor"></TeamTab>
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
      
  }
}
</script>

<style>

</style>
