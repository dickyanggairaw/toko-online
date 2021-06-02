import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: []
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setProducts(state, payload) {
      state.products = payload
    }
  },
  actions: {
    getProducts (context) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) =>{
          context.commit('setProducts', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        url: '/users/login',
        method: 'POST',
        data:{
          email: payload.email,
          password: payload.password
        }
      })
        .then(({data}) => {
          localStorage.setItem('access_token', data)
          context.commit('setLogin', true)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    register (context, payload) {
      axios({
        url: '/users/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(() => {
          alert("Success Register")
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
