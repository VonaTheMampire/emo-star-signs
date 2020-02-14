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
  align-items: center;
  justify-content: space-between;
  height: auto;

  .es-starsign {
    padding: 10px;
    transition: all .2s;
    height: 100px;

    .es-icon {
      height: 90px;
      width: 90px;
      fill: white;
      transition: all .2s;
      position: absolute;
    }

     &:hover {
      border-color: red;

       .es-icon {
         fill: red;
         margin-top: -10px;
         margin-left: -10px;
         height: 110px;
         width: 110px;
       }
    }

    &.selected {
      border-color: red;

      .es-icon {
         fill: red;
       }
    }
  }
}
</style>
