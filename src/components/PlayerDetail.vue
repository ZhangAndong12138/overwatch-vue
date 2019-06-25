<template>
  <div id="player-detail">
    <div :style="{background:'#' + player.teams[0].team.primaryColor}" class="player-header">
      <el-row>
        <el-col :span="3">
          &nbsp;
        </el-col>
        <el-col :span="9">
          <el-image :src="player.headshot" fit="contain"></el-image>
        </el-col>
        <el-col :span="6">
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h4 v-html="player.givenName + ' ' + player.familyName"></h4>
          <h1 v-html="player.name"></h1>
          <h1 v-html="'No.' + player.attributes.player_number"></h1>
        </el-col>
        <el-col :span="6">
          
        </el-col>
      </el-row>
    </div>
    <div>

    </div>
    <div class="player-analysis">
        <div id="heroes-bar"></div>
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
      player: {
        teams: [
          {
            team: {
              primaryColor: ""
            }
          }
        ],
        attributes: {
            player_number: 0
        }
      },
      stats:{},
      statRanks:{},
      playerid: this.$route.params.playerid
    };
  },
  methods: {
    log: function() {
      console.log(this.player);
    },
    heroesBar: function(){
        let heroes_data = [['name','time']];
        let total_time = 0;
        for(let hero of this.stats.heroes){
            if(hero.stats.time_played_total > 60){
                heroes_data.push([hero.name, hero.stats.time_played_total])
                total_time += hero.stats.time_played_total;
            }
        }
        heroes_data.sort(function(x, y){
            if(x[1] > y[1]){
                return 1;
            }else if(x[1] < y[1]){
                return -1;
            }else{
                return 0;
            }
        });
        let heroes_bar = this.echarts.init(document.getElementById('heroes-bar'))
        let option = ({
            title: { text: '英雄游戏时间' },
            dataset: {
                source: heroes_data
            },
            tooltip:{
                show: true,
                formatter: function(params){
                    let sec = params.value[1];
                    let hour = Math.floor(sec / 3600);
                    sec = sec - 3600 * hour;
                    let min  = Math.floor(sec / 60);
                    sec = Math.floor(sec - 60 * min); 
                    return params.name + ' : ' + hour + '小时' + min + '分钟' + sec + '秒';
                }
            },
            grid: {
                containLabel: true,
                show: true
            },
            xAxis: {
                name: 'name',
                show: false
            },
            yAxis: {
                type: 'category',

            },
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                // build a color map as your need.
                                var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                    '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                    '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                                ];
                                return colorList[params.dataIndex]
                            },
                            label: {
                                show: true,
                                position: 'right',
                                fontSize:'14',
                                formatter: function(params){
                                    let sec = params.value[1];
                                    let hour = Math.floor(sec / 3600);
                                    sec = sec - 3600 * hour;
                                    let min  = Math.floor(sec / 60);
                                    sec = Math.floor(sec - 60 * min); 
                                    return hour + 'h ' + min + 'm ' + sec + 's    '+
                                     (params.value[1] / total_time * 100).toFixed(2) + '%';
                                }
                            }
                        }
                    }
                }
            ]
        });
        heroes_bar.setOption(option);
    }
  },

  mounted() {
    this.axios
      .get(
        "https://api.overwatchleague.cn/players/" +
          this.playerid +
          "?locale=zh-cn&season=2019&stage_id=regular_season&expand=stats,stat.ranks"
      )
      .then((response) => {
          this.player = response.data.data.player;
          this.stats = response.data.data.stats;
          this.statRanks = response.data.data.statRanks;

          console.log(this.stats);
          this.heroesBar();
      }) 
      .catch((error)  => {
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

#heroes-bar{
    width: 100%;
    height: 500px;
}
</style>
