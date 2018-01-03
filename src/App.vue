<template>
  <div id="app">
    <app-header></app-header>
      <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header';
  import Footer from './components/shared/Footer';

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,
    },
    created() {
      this.$store.dispatch('tryAutoLogin');
    },
  };
</script>

<style lang="scss">
  @import './assets/css/style';
</style>
