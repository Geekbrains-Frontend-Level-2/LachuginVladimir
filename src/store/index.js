import Vue from 'vue'
import Vuex from 'vuex'

import goods from './goods'

vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        goods
    }
})


export default store