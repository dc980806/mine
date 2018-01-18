import Vue from 'vue'
import Router from 'vue-router'

/*一级路由*/
import Home from '../page/home.vue'
import Cont from '../page/cont.vue'
import Audio from '../page/audio.vue'
import Group from '../page/group.vue'
import Mine from '../page/mine.vue'

/*二级路由*/
import Movie from '../page/secondrouter/movie.vue'
import Read from '../page/secondrouter/read.vue'
import TV from '../page/secondrouter/tv.vue'
import Town from '../page/secondrouter/town.vue'
import Music from '../page/secondrouter/music.vue'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cont',
      name: 'Cont',
      component: Cont,children:[
        {path:'movie',component:Movie},
        {path:'read',component:Read},
        {path:'tv',component:TV},
        {path:'town',component:Town},
        {path:'music',component:Music},
        {path:'',component:Movie},
      ]
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }

  ]
})
