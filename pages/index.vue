<template>
  <div class="index">
    <h1>
      CREATE SLIDES WITH NUXT.JS
    </h1>
    {{ $store.state.activePresentationIndex  }}
    <ul>
      <li @click="setActivePresentation(index)" v-for="(presentation, index) in presentations">
        {{presentation.title}}
      </li>
    </ul>
  </div>
  </section>
</template>

<script>
const presentations = require('.')

export default {
  layout: 'homepage',
  data () {
    return {
      presentations
    }
  },
  methods: {
    setActivePresentation (index) {
      this.$store.commit('setActivePresentationIndex', index)
      this.$router.push(presentations[index]['uri'])
    }
  }
}
</script>
