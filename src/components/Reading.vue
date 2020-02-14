<template>
  <div class="es-reading">
    <transition name="slide">
      <div class="es-reading-textbox" v-if="!loading && sign">
        <div class="es-reading-text">
          <h1 class="es-sign">{{sign}} <span>{{date}}</span></h1>
          <h3 class="es-aspect">Your emo aspect for today is {{aspect}}</h3>
          <div class="es-flex">
            <div class="es-text-container">
              <p class="es-text">{{reading}}</p>
            </div>
            <div class="es-rating-container">
              <DayRatings />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getReading } from '@/helpers/starsigns.js'
import { getAspect } from '@/helpers/emos.js'
import moment from 'moment'
import DayRatings from '@/components/DayRatings.vue'

export default {
  components: {
    DayRatings
  },

  props: {
    sign: {
      required: true,
      default: '',
    }
  },

  data () {
    return {
      reading: '',
      loading: false,
      hero: ''
    }
  },

  watch: {
    sign (newSign) {
      this.loading = true
      this.reading = getReading(newSign)
      this.aspect = getAspect(newSign)
      setTimeout(() => {
        this.loading = false
      }, 400)
    }
  },

  computed: {
    date () {
      return this.sign !== '' ? moment().format('dddd, MMMM Do') : ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .es-reading {
    padding: 20px 60px;

    .es-reading-textbox {
      width: 100%;
      position: relative;

      .es-reading-text {
        max-width: 1080px;
        margin: 0 auto;
        font-size: 20px;
      
        .es-flex {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        .es-rating-container {
          margin-left: 50px;
          min-width: 260px;
        }

        .es-aspect {
          color: red;
          font-size: 22px;
          letter-spacing: 0.08em;
        }

        .es-sign {
          font-size: 35px;
          font-family: 'Amatic SC';

          // date text 
          span {
            font-weight: lighter;
            margin-left: 10px;
            font-size: 22px;
          }
        }
      }
    }
  }

  .slide-enter-active, .slide-leave-active {
  transition: opacity .5s, margin .2s;
  }

  .slide-enter, .slide-leave-to {
    opacity: 0;
    margin-left: -4px;
  }
</style>