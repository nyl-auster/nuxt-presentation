<template>
  <div class="index">
    <h1>
      PRESENTATIONS
    </h1>
    <ul>
      <li @click="setActivePresentation(index)" v-for="(presentation, index) in presentations">
        <img class="icon" :src="presentation.icon" />
        <h2>{{presentation.title}}</h2>
      </li>
    </ul>
  </div>
  </section>
</template>

<script>
const presentations = require('../presentations')
export default {
  layout: 'presentationsList',
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

<style scoped>
h1 {
  padding-bottom: 5vh;
  border-bottom: solid silver 1px;
}

h2 {
  font-size: 5vh;
}

ul {
  list-style-type: none;
}

li {
  font-size: 5vh;
  padding: 5vh 2vw;
  border-bottom: solid silver 1px;
}

.icon {
  max-height:10vh;
}

li:hover {
  cursor: pointer;
  background: rgb(240,240,240); 
}
</style>
