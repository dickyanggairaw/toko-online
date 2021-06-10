import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    carts: []
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setProducts(state, payload) {
      state.products = payload
    },
    setCart(state, payload){
      state.carts = payload
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
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          context.commit('setLogin', true)
          alert("Success Login")
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
          alert(err)
        })
    },
    logout (context, payload){
      localStorage.removeItem('access_token')
      context.commit('setLogin', payload)
    },
    addCart (context, payload){
      axios({
        url: '/carts/' + payload,
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => alert("success add cart"))
        .catch(err => console.log(err))
    },
    getCart (context) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({data}) => context.commit('setCart', data))
        .catch((err) => console.log(err))
    },
    deleteCart (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          context.dispatch.getCart()
          alert(`Success delete ${payload.nama}`)
        })
        .then((err) => console.log(err))
    }
  },
  modules: {
  }
})
