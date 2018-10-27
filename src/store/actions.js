//包含n个用于间接更新状态的对象
import {
  reqHomeData,
  reqTopciData,
  reqNavData
}from '../api'

import {
  GETHOMEDATA,
  GETTOPICDATA,
  GETNAVDATA

}from '../store/mutation-types'


export default {
  async getHomeData({commit},cb){
    const result = await reqHomeData();
    if(result.code===0){
      const home_data =result.data;
      commit(GETHOMEDATA,{home_data})
      typeof cd==='function'&&cd()
  }
},
  async getTopicData({commit},cb){
    const result = await reqTopciData();
    if(result.code===0){
      const category_data =result.data;
      commit(GETTOPICDATA,{category_data})
      typeof cd==='function'&&cd()
  }
},
  async getNavData({commit},cb){
    const result = await reqNavData();
    if(result.code===0){
      const nav_data =result.data;
      commit(GETNAVDATA,{nav_data})
      typeof cd==='function'&&cd()
  }
}
}