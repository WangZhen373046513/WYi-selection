//包含n个用于直接更新状态的对象

import {
  GETHOMEDATA,
  GETTOPICDATA,
  GETNAVDATA
}from './mutation-types'

export default {
  [GETHOMEDATA](state,{home_data}){
    state.home_data = home_data
  },

  [GETTOPICDATA](state,{category_data}){
    state.category_data = category_data
  },
  [GETNAVDATA](state,{nav_data}){
    state.nav_data = nav_data
  }
}












