//路由器对象模块
import  Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import MSite from '../pages/MSite/MSite.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import Classify from '../pages/Classify/Classify.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/Profile/Profile.vue'

Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/home',
      component:Home,
      meta: {
        showFooter: false // 标识需要显示footer
      }
    },

    {
      path:'/msite',
      component:MSite,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path:'/generalthings',
      component:GeneralThings,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path:'/classify',
      component:Classify,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path:'/shop',
      component:Shop,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta: {
        showFooter: false // 标识需要显示footer
      }
    },
    {
      path:'/',
      redirect:'/home',
    },
  ]
})