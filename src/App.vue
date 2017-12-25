<template>
  <div id="app">
    <app-header></app-header>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <router-view/>
          </div>
        </div>
      </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

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
