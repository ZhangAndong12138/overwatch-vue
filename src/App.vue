<template>
  <div id="app">
    <!-- <TeamList></TeamList> -->
    <TeamDetail teamid='7692'></TeamDetail>
  </div>
</template>

<script>
import TeamList from './components/TeamList'
import TeamDetail from './components/TeamDetail'
export default {
  name: 'app',
  components: {
    TeamList,
    TeamDetail
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
