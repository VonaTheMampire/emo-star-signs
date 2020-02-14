<template>
  <div class="es-rating">
    <h3>{{title}} {{starRating}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      default: ''
    },
    rating: {
      required: true,
      default: 0
    }
  },

  computed: {
    starRating () {
      return Array(Number.parseInt(this.rating)).fill('⭐').join('')
    }
  }
}
</script>

<style lang="scss" scoped>
.es-rating {
  font-family: 'Amatic SC';
  font-size: 28px;  
}
</style>