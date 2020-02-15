<template>
  <div class="es-starsign-select">
    <div :class="['es-starsign', {selected: value === sign}]" v-for="sign in signs" :key="sign" @click="$emit('input', sign)">
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

  data () {
    return {
      signs: signs
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
      }
    }
  }

  @media only screen and (max-width: 1378px) {
    .es-starsign {
      height: 100px;
      width: 16%;
    }
  }

  @media only screen and (max-width: 768px) {
    .es-starsign {
      height: 100px;
      width: 32%;
    }
  }
}
</style>
