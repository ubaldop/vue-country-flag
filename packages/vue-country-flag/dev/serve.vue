<script>
import Vue from 'vue';
import CountryFlag from '@/CountryFlag.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    CountryFlag
  },
  data() {
    return {
     items: {value: 'it'}
    };
  },
});
</script>

<template>
  <div id="app">
    <CountryFlag :country='items.value'/>
    <CountryFlag country='sun' size='big'/>
    <CountryFlag country='se' size='small'/>
  </div>
</template>
