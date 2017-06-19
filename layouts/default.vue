<template>
  <div class="container">
    <div id="presentation-topbar">
      <presentationBackToHome />
      <presentationPager :presentation="presentation" />
    </div>
    <nuxt/>
  </div>
</template>

<script>
import presentationPager from '~/components/presentationPager'
import presentationBackToHome from '~/components/presentationBackToHome'
import presentationService from '../services/presentationService'

export default {
  components: {
    presentationPager,
    presentationBackToHome
  },
  data () {
    return {
      presentation: presentationService.findOne(this.$store.state.activePresentationIndex)
    }
  },
  created () {
    if (typeof window === 'undefined') {
      return
    }
    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        this.goToNext()
      }
      if (event.key === 'ArrowLeft') {
        this.goToPrevious()
      }
    })
  },
  methods: {
    setActiveSlide (index) {
      this.$store.commit('setActiveSlideIndex', index)
    },
    goTo (index) {
      this.setActiveSlide(index)
      const slide = this.presentation.slides[index]
      this.$router.push(slide.uri)
    },
    goToNext () {
      let currentIndex = this.$store.state.activeSlideIndex
      let newIndex = currentIndex < this.presentation.slides.length - 1 ? currentIndex + 1 : 0
      this.goTo(newIndex)
    },
    goToPrevious () {
      let currentIndex = this.$store.state.activeSlideIndex
      let newIndex = currentIndex > 0 ? currentIndex - 1 : this.presentation.slides.length - 1
      this.goTo(newIndex)
    }
  }
}
</script>
