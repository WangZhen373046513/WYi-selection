// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import '../static/css/reset.css'




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el:'#app',
 render: h1 => h1(App),
  router
})