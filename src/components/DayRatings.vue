<template>
  <div class="es-day-ratings">
    <Rating title="Vibe" :rating="Math.ceil(Math.random() * 3)" />
    <Rating title="Emptiness" :rating="Math.ceil(Math.random() * 3)" />
    <Rating title="Sadness" :rating="Math.ceil(Math.random() * 3)" />
  </div>
</template>

<script>
import Rating from '@/components/Rating'

export default {
  components: {
    Rating
  }
}
</script>