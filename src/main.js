// import Cart from './cart'
// import ItemList from './itemList'


// const CartObject = new Cart(document.querySelector('.cart'))
// const List = new ItemList(document.querySelector('main'), CartObject)

import Vue from 'vue'
import App from './App.vue'

import store from './store'

new Vue({
  el: 'main',
  template: '<App />',
  components: {
    App
  },
  store
})
