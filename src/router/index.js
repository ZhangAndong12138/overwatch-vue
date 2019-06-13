import Vue from 'vue'
import Router from 'vue-router'
import TeamList from '../components/TeamList.vue'

Vue.use(Router);

export default new Router({
    routes : [
        {
            path: '/teamlist',
            component: TeamList
        }
    ]
});