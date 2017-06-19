<template>
   <slidesPager :presentation="presentation" />
</template>

<script>

import slidesPager from '~/components/slidesPager'

export default {
  components: {
    slidesPager
  },
  data () {
    const presentationIndex = this.$store.state.activePresentationIndex
    const presentations = require('~/pages')
    const presentation = presentations[presentationIndex]
    console.log(presentation)
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
      this.$store.commit('setActiveSlideIndex', index)
    },
    goTo (index) {
      console.log('going to slide ' + index)
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