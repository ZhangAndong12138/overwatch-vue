<template>
  <div id="player-detail">
    <div
      :style="{background:'#' + player.teams[0].team.primaryColor}"
      class="player-header"
      v-if="loaded"
    >
      <el-row :style="{color:'#' + player.teams[0].team.secondaryColor}">
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="9">
          <el-image :src="player.headshot" fit="contain"></el-image>
        </el-col>
        <el-col :span="12">
          <br><br>
          <el-image class="team-logo" :src="player.teams[0].team.logo" ></el-image>&nbsp;&nbsp;
          <span class="player-realname" v-html="player.givenName + ' ' + player.familyName"></span><br>
          <span class="player-name" v-html="player.name"></span>
          <span class="player-number" v-html="player.attributes.player_number"></span>
          <span class="player-role" v-html="playerRole(player.attributes.role)"></span>
        </el-col>
      </el-row>
    </div>
    <div class="player-analysis">
      <div id="heroes-bar"></div>
    </div>
    <div class="player-table">
      <div v-if="loaded" style="width:45%;">
        <el-table :data="tableData" :stripe="true" :header-cell-style="headerStyle">
          <el-table-column prop="name" label="全部英雄" align="center" label-class-name="table-lable"></el-table-column>
          <el-table-column prop="num" label="每十分钟均值" align="center" label-class-name="table-lable"></el-table-column>
          <el-table-column prop="rank" label="联赛排位" align="center" label-class-name="table-lable"></el-table-column>
        </el-table>
      </div>
      <div v-if="loaded" style="width:100%;">
        <el-table :data="stats.heroes" :stripe="true" :header-cell-style="headerStyle">
          <el-table-column prop="name" label="英雄" align="center" label-class-name="table-lable"></el-table-column>
          <el-table-column prop="stats.hero_damage_avg_per_10m" label="伤害/10min" align="center" label-class-name="table-lable" :formatter="fixTwo"></el-table-column>
          <el-table-column prop="stats.healing_avg_per_10m" label="治疗/10min" align="center" label-class-name="table-lable" :formatter="fixTwo"></el-table-column>
          <el-table-column prop="stats.final_blows_avg_per_10m" label="最后一击/10min" align="center" label-class-name="table-lable" :formatter="fixTwo"></el-table-column>
          <el-table-column prop="stats.eliminations_avg_per_10m" label="消灭/10min" align="center" label-class-name="table-lable" :formatter="fixTwo"></el-table-column>
          <el-table-column prop="stats.deaths_avg_per_10m" label="阵亡/10min" align="center" label-class-name="table-lable" :formatter="fixTwo"></el-table-column>
          <el-table-column prop="stats.ultimates_earned_avg_per_10m" label="终极技能/10min" align="center" label-class-name="table-lable" :formatter="fixTwo"></el-table-column>
          <el-table-column prop="stats.time_played_total" label="使用时长" align="center" label-class-name="table-lable" :formatter="timeFormatter"></el-table-column>
        </el-table>
      </div>
    </div>
    <button @click="log">console.log</button>
  </div>
</template>

<script>
export default {
  name: "PlayerDetail",
  components: {},
  data() {
    return {
      player: {},
      stats: {},
      statRanks: {},
      tableData: [],
      loaded: false,
      playerid: this.$route.params.playerid
    };
  },
  methods: {
    log: function() {
      console.log(this.stats);
    },
    playerRole: function(role){
      let icon = "";
      if(role === "offense"){
        icon = "el-icon-aim";
      }else if(role === "support"){
        icon = "el-icon-first-aid-kit";
      }else if(role === "tank"){
        icon = "el-icon-c-scale-to-original";
      }else{
        icon = "el-icon-copy-document";
      }
      return "<i class=" + icon + " title=" + role + "></i>";
    },
    heroesBar: function() {
      let heroes_data = [["name", "time"]];
      let total_time = 0;
      for (let hero of this.stats.heroes) {
        if (hero.stats.time_played_total > 60) {
          heroes_data.push([hero.name, hero.stats.time_played_total]);
          total_time += hero.stats.time_played_total;
        }
      }
      heroes_data.sort(function(x, y) {
        if (x[1] > y[1]) {
          return 1;
        } else if (x[1] < y[1]) {
          return -1;
        } else {
          return 0;
        }
      });
      let heroes_bar = this.echarts.init(document.getElementById("heroes-bar"));
      let option = {
        title: {
          text: "英雄游戏时间",
          position: "top"
        },
        dataset: {
          source: heroes_data
        },
        tooltip: {
          show: true,
          formatter: function(params) {
            let sec = params.value[1];
            let hour = Math.floor(sec / 3600);
            sec = sec - 3600 * hour;
            let min = Math.floor(sec / 60);
            sec = Math.floor(sec - 60 * min);
            return (
              params.name + " : " + hour + "小时" + min + "分钟" + sec + "秒"
            );
          }
        },
        grid: {
          containLabel: true,
          show: true
        },
        xAxis: {
          name: "name",
          show: false
        },
        yAxis: {
          type: "category"
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = [
                    "#C1232B","#B5C334","#FCCE10","#E87C25",
                    "#27727B","#FE8463","#9BCA63","#FAD860",
                    "#F3A43B","#60C0DD","#D7504B","#C6E579",
                    "#F4E001","#F0805A","#26C0C0"
                  ];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true,
                  position: "right",
                  fontSize: "14",
                  formatter: function(params) {
                    let sec = params.value[1];
                    let hour = Math.floor(sec / 3600);
                    sec = sec - 3600 * hour;
                    let min = Math.floor(sec / 60);
                    sec = Math.floor(sec - 60 * min);
                    return (
                      hour + "h " + min + "m " + sec + "s    " +
                      ((params.value[1] / total_time) * 100).toFixed(2) + "%"
                    );
                  }
                }
              }
            }
          }
        ]
      };
      heroes_bar.setOption(option);
    },
    headerStyle: function(){
      return {'background-color': '#333','color':'#fff'};
    },
    fixTwo: function(row, column, cellValue, index){
      if(cellValue === 0){
        return "--";
      }else{
        return cellValue.toFixed(2);
      }
    },
    timeFormatter: function(row, column, cellValue, index) {
      let sec = cellValue;
      let hour = Math.floor(sec / 3600);
      sec = sec - 3600 * hour;
      let min = Math.floor(sec / 60);
      sec = Math.floor(sec - 60 * min);
      return hour + "小时" + min + "分钟" + sec + "秒";
    }
  },

  mounted() {
    this.axios
      .get(
        "https://api.overwatchleague.cn/players/" +
          this.playerid +
          "?locale=zh-cn&season=2019&stage_id=regular_season&expand=stats,stat.ranks"
      )
      .then(response => {
        this.player = response.data.data.player;
        this.stats = response.data.data.stats;
        this.statRanks = response.data.data.statRanks;
        this.tableData.push({'name':'伤害', 'num':this.stats.all.hero_damage_avg_per_10m.toFixed(2),'rank':this.statRanks.hero_damage_avg_per_10m });
        this.tableData.push({'name':'治疗', 'num':this.stats.all.healing_avg_per_10m.toFixed(2),'rank':this.statRanks.healing_avg_per_10m });
        this.tableData.push({'name':'最后一击', 'num':this.stats.all.final_blows_avg_per_10m.toFixed(2),'rank':this.statRanks.final_blows_avg_per_10m });
        this.tableData.push({'name':'消灭', 'num': this.stats.all.eliminations_avg_per_10m.toFixed(2),'rank':this.statRanks.eliminations_avg_per_10m });
        this.tableData.push({'name':'阵亡', 'num':this.stats.all.deaths_avg_per_10m.toFixed(2),'rank':this.statRanks.deaths_avg_per_10m });
        this.tableData.push({'name':'终极技能', 'num':this.stats.all.ultimates_earned_avg_per_10m.toFixed(2),'rank':this.statRanks.ultimates_earned_avg_per_10m });
      
        this.heroesBar();
        this.loaded = true;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.player-header {
  margin-bottom: 30px;
  padding-left: 20px;
  border-radius: 5px;
}
.el-image {
  width: 250px;
  height: 250px;
}
.team-logo {
  width: 45px;
  height: 45px;
}
.player-realname{
  font-size: 24px;
}
.player-name{
  font-size: 70px;
}
.player-number{
  margin-left:20px;
  padding: 0px 5px;
  color: #000000;
  background-color: #ffffff;
  font-size: 40px;
}
.player-role{
  padding: 0px 5px;
  color: #ffffff;
  background-color: #333;
  font-size: 40px;
}
.player-table{
  width: 100%;
  float: left;
}
 
#heroes-bar {
  width: 100%;
  height: 500px;
}

</style>
