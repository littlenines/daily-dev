export default {
    namespaced: true,
    state: {
        isNav: false
    },
    getters: {
        getNav: state => state.isNav
    },
    mutations: {
        SET_NAV (state, payload) {
        state.isNav = payload
        }
    },
    actions: {
        setIsNav ({ commit }, payload) {
        commit('SET_NAV', payload)
        }
    }
}