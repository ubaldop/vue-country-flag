<script>
import { defineComponent } from 'vue';
import CountryFlag from '../../vue-country-flag/src/CountryFlag.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    CountryFlag
  }
});
</script>

<template>
  <div id="app">
    Hello from Vue3
    <CountryFlag country='it' size="big"/>
    <CountryFlag country='fr' size="small"/>
    <CountryFlag country='is'/>
    <CountryFlag country='sun'/>
  </div>
</template>