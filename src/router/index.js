import Vue from 'vue'
import Router from 'vue-router'
import TeamList from '../components/TeamList.vue'
import TeamDetail from '../components/TeamDetail.vue'
import PlayerDetail from '../components/PlayerDetail'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes : [
        {
            path: '/',
            component: TeamList
        },
        {
            path: '/teamdetail/:teamid',
            component: TeamDetail
        },
        {
            path: '/playerdetail/:playerid',
            component: PlayerDetail
        }
    ]
});