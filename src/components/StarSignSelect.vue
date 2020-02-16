<template>
  <div class="es-starsign-select" id="es-starsign-select">
    <div :class="['es-starsign', {selected: value === sign}]" v-for="sign in signs" :key="sign" @click="select(sign)">
      <InlineSvg :src="require(`@/assets/png/${sign}.svg`)" class="es-icon" />
    </div>
  </div>
</template>

<script>
import { signs } from '@/helpers/starsigns.js'
import InlineSvg from 'vue-inline-svg'

export default {
  components: {
    InlineSvg
  },

  props: {
    value: {
      required: true,
      default: ''
    }
  },

  methods: {
    select (sign) {
      this.$emit('input', sign)
      if(window.innerWidth < 769 && !this.loading) {
        this.loading = true
        setTimeout(() => {
          console.log('start')
          const el = document.getElementById("es-reading")
          el.scrollIntoView({ behavior: "smooth" })
          this.loading = false
          console.log('end')
        }, 650)
      }
    }
  },

  data () {
    return {
      signs: signs,
      loading: false
    }
  }
}
</script>

<style lang="scss" scoped>
.es-starsign-select {
  padding: 20px 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: auto;

  .es-starsign {
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: all .2s;
    height: 90px;
    width: 8%;

    @media only screen and (max-width: 1378px) {
      height: 100px;
      width: 16%;
    }

    @media only screen and (max-width: 768px) {
      height: 100px;
      width: 32%;
    }

   .es-icon {
      width: 90px;
      height: 90px;
      fill: white;
      transition: all .2s;
      position: absolute;
    }

     &:hover {
      border-color: red;

       .es-icon {
         fill: red;
         height: 120px;
         width: 120px;
       }
    }

    &.selected {
      border-color: red;

      .es-icon {
        fill: red;
        height: 120px;
        width: 120px;

        @media only screen and (max-width: 768px) {
          height: 110px;
          width: 110px;
        }
      }
    }
  }
}
</style>
