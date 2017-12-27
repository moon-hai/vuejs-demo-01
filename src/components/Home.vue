<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Global Feed</a>
              </li>
            </ul>
          </div>
          <app-articles></app-articles>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <a href="#" class="label label-pill label-default">programming</a>
              <a href="#" class="label label-pill label-default">javascript</a>
              <a href="#" class="label label-pill label-default">angularjs</a>
              <a href="#" class="label label-pill label-default">react</a>
              <a href="#" class="label label-pill label-default">mean</a>
              <a href="#" class="label label-pill label-default">node</a>
              <a href="#" class="label label-pill label-default">rails</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Articles from './article/Articles.vue';

  export default {
    components: {
      appArticles: Articles,
    },
    created() {
      this.$store.dispatch('tryAutoLogin')
    }
  };
</script>

<style>

</style>
