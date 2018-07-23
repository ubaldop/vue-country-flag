<template>
    <span :class="flagIconClass" :style="flagStyle"></span>
</template>

<script>
import 'vue-country-flag/css/flags/flags.min.css'

export default {
  name: 'CountryFlag',
  props: {
    country: {
      type: String,
      required: true,
      validator: function (value) {
        return value.length === 2
      }
    },
    size: {
      type: String,
      validator: function(value) {
        return value === "small" || value === "normal" || value === "big"
      }
    }
  },
  computed: {
    flagIconClass () {
      return {
        [`flag ${this.flagIconCountry}`]: true,
        [this.flagMargin]: true
      }
    },
    flagIconCountry () {
      return `flag-${this.country.toLowerCase()}`
    },
    flagWidth () {
      switch (this.size) {
        case 'small':
            return '16' 
        case 'normal':
            return '32'
        case 'big':
            return '64'
        default:
            return '32'
      }
    },
    flagStyle () {
      return `transform: scale(calc(${this.flagWidth} / 64));`
    },
    flagMargin () {
      switch (this.size) {
        case 'small':
            return 'small-flag' 
        case 'normal':
            return 'normal-flag'
        case 'big':
            return 'big-flag'
        default:
            return 'normal-flag'
      }
    }
  }
}
</script>
<style scoped>
  .small-flag {
    margin-left: -24px;
    margin-right: -24px;
  }
  .normal-flag {
    margin-left: -16px;
    margin-right: -16px;
  }
  .big-flag {
    margin-right: 0;
    margin-left: 0;
  }
</style>
