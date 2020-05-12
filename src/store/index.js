import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import cookie from "../network/cookie";
Vue.use(Vuex)
const userInfo={
  name:cookie.getCookie('phone')||'',
    token:cookie.getCookie('token')||''
}
var cartList=JSON.parse(localStorage.getItem('cartList')||'[]')
const state={
  cartList:cartList,
  userInfo
}
const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
