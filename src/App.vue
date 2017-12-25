<template>
  <div id="app">
    <app-header></app-header>
      <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue'
  import Footer from './components/shared/Footer.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,
    }
  };
</script>

<style>

</style>
