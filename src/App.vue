<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
        </el-header>
        <el-main>
          <TeamList></TeamList>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import TeamList from "./components/TeamList";
import TeamDetail from "./components/TeamDetail";
export default {
  name: "app",
  components: {
    TeamList
  } 
};
</script>	
<style scoped>
.el-header {
  background-color: #eba235;
  color: #333;
  line-height: 60px;
}

.el-container {
  color: #333;
}
</style>