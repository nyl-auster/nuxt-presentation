import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    activePresentationIndex: 0,
    activeSlideIndex: 0
  },
  mutations: {
    setActiveSlideIndex (state, index) {
      state.activeSlideIndex = index
    },
    setActivePresentationIndex (state, index) {
      state.activeSlideIndex = 0
      state.activePresentationIndex = index
    }
  }
})

export default store
