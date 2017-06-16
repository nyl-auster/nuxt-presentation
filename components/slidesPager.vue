 <template>
  <div class="counter">
    {{ $store.state.activeSlideIndex +1 }} / {{ presentation.slides.length }}
  </div>
</template>

<script>
export default {
  props: {
    presentation: {
      type: Object,
      default () { }
    }
  }
}
</script>

<style scoped>
.counter {
  padding-top: 5vh;
  color:white;
  text-align: center;
  font-size:5vh;
}
</style>
