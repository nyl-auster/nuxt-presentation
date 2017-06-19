 <template>
  <div class="pager">
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

</style>
