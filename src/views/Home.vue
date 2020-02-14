<template>
  <div>
    <div class="es-billboard">
      <Header />
      <SignSelector v-model="selectedSign" />
    </div>
    <Reading :sign="selectedSign" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import SignSelector from '@/components/StarSignSelect.vue'
import Reading from '@/components/Reading.vue'

export default {
  components: {
    Header,
    SignSelector,
    Reading
  },

  data () {
    return {
      selectedSign: ''
    }
  }
}
</script>

<style lang="scss">
.es-billboard {
  padding: 60px;
  background: black;
  color: white;
}
</style>