<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header>
            <el-row>
              <el-col :span="6">
                <h1>守望先锋联赛</h1>
              </el-col>
            </el-row>
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
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  color: #333;
}

.el-container {
  color: #333;
}
</style>