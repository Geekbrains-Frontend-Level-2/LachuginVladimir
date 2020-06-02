const state = {
    data: 'hello'
}

const getters = {
    getData: state => state.data
}

const actions = {
    changeData () {

    }
}

const mutations = {
    changeDataMutation (state) {
        state.data = 'bye'
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}