<template>
  <div>
    <div class="es-billboard">
      <Header />
      <SignSelector v-model="selectedSign" />
    </div>
    <Reading :sign="selectedSign" />
    <Footer />
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
  color: white;
  background-color: black;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRetkZB4ffPKjC5gMXk24su9S-AlLu40Xlw19FCIKnXinyjjIhb');
  background-repeat: repeat;
  padding: 30px 0;
}
</style>