<template>
  <div class="es-reading">
    <transition name="slide-left">
      <div v-if="!sign" class="es-reading-textbox">
        <div class="es-reading-text">
          <div>
            <h1>About</h1>
            <p>This a silly project that generates random horoscopes mixing emo lyrics with astrology. It's based on the song <a href="https://futureteens.bandcamp.com/track/whats-my-sign-again-2">"What's My Sign Again?"</a> by the band <a href="https://futureteens.bandcamp.com/">Future Teens</a>. You should really check them out 🙏.</p>
          </div>
        </div>
      </div>
    </transition>

    <transition name="slide-left">
      <div class="es-reading-textbox" v-if="!loading && sign">
        <div class="es-reading-text">
          <h1 class="es-sign">{{sign}} <span>{{date}}</span></h1>
          <h3 class="es-aspect">Daily emo aspect: {{aspect}}</h3>
        </div>
      </div>
    </transition>

    <transition name="slide-right">
      <div class="es-reading-textbox" v-if="!loading && sign">
        <div class="es-reading-text">
          <div class="es-flex">
            <div class="es-text-container es-container">
              <p class="es-text">{{reading}}</p>
            </div>
            <div class="es-rating-container es-container">
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
      }, 600)
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
    min-height: 500px;

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
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }

        .es-text-container {
          max-width: 700px;
        }

        .es-rating-container {
          margin-left: 50px;
          min-width: 300px;

          @media only screen and (max-width: 900px) { 
            margin-left: 0px;
          }
        }

        .es-aspect {
          color: red;
          font-size: 22px;
          letter-spacing: 0.08em;
        }

        .es-spotify {
          min-width: 300px;
          margin-left: 50px;
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

  @media only screen and (max-width: 900px) {
    .es-container {
      min-width: 100%;
    }
  }
</style>