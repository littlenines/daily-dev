export default {
    namespaced: true,
    state: {
        isDesktop: false
    },
    getters: {
        getDesktop: state => state.isDesktop
    },
    mutations: {
        SET_DESKTOP (state, payload) {
        state.isDesktop = payload
        }
    },
    actions: {
        setIsDesktop ({ commit }, payload) {
        commit('SET_DESKTOP', payload)
        }
    }
}