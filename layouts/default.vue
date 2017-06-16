<template>
  <div class="container">
   <span style="color:white">{{ $store.state.activeSlideIndex +1 }} / {{slider.slides.length}}</span>
    <nav>
      <ul>
        <li v-for="(slide, index) in slider.slides">
          <span style="color:white" @click="goTo(index)">{{ slide.title }} </span>
          <!--<nuxt-link @click.native="setActiveSlide(index)" :to="slide.uri">{{ slide.title }} </nuxt-link>-->
        </li>
      </ul>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
let slider = require('../pages/nuxt/slider')
console.log(slider)
slider.slides = Array.from(slider.slides)

export default {
  data () {
    return {
      slider
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
      const slide = slider.slides[index]
      this.$router.push(slide.uri)
    },
    goToNext () {
      let currentIndex = this.$store.state.activeSlideIndex
      let newIndex = currentIndex < slider.slides.length - 1 ? currentIndex + 1 : 0
      this.goTo(newIndex)
    },
    goToPrevious () {
      let currentIndex = this.$store.state.activeSlideIndex
      let newIndex = currentIndex > 0 ? currentIndex - 1 : slider.slides.length - 1
      this.goTo(newIndex)
    }
  }
}
</script>
