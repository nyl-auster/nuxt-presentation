<template>
  <div class="container">
    <slidesPager :presentation="presentation" />
    <nuxt/>
  </div>
</template>

<script>
import presentation from '../pages/nuxt'
import slidesPager from '~/components/slidesPager'

export default {
  components: {
    slidesPager
  },
  data () {
    return {
      presentation
    }
  },
  created () {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
          this.goToNext()
        }
        if (event.key === 'ArrowLeft') {
          this.goToPrevious()
        }
      })
    }
  },
  methods: {
    setActiveSlide (index) {
      this.$store.commit('setActiveSlide', index)
    },
    goTo (index) {
      console.log('going to ' + index)
      this.setActiveSlide(index)
      const slide = presentation.slides[index]
      this.$router.push(slide.uri)
    },
    goToNext () {
      let currentIndex = this.$store.state.activeSlideIndex
      let newIndex = currentIndex < presentation.slides.length - 1 ? currentIndex + 1 : 0
      this.goTo(newIndex)
    },
    goToPrevious () {
      let currentIndex = this.$store.state.activeSlideIndex
      let newIndex = currentIndex > 0 ? currentIndex - 1 : presentation.slides.length - 1
      this.goTo(newIndex)
    }
  }
}
</script>
