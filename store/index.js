import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    activeSlideIndex: 0
  },
  mutations: {
    setActiveSlide (state, index) {
      state.activeSlideIndex = index
    }
  }
})

export default store
