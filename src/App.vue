<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header>
            <el-row>
              <el-col :span="6">
                <router-link :to="'/'">
                  <h1>守望先锋联赛</h1>
                </router-link>
              </el-col>
            </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
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

a {
  text-decoration:none;
}

h1 {
  color: #333;
}
</style>