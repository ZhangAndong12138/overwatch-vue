<template>
  <div id="app">
    <TeamList></TeamList>
  </div>
</template>

<script>
import TeamList from './components/TeamList'
export default {
  name: 'app',
  components: {
    TeamList
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
