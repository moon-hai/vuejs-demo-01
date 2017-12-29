<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <img :src= "user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <app-articles :username="user.username"></app-articles>
      </div>
    </div>
  </div>
</template>

<script>
  import Articles from './Articles';

  export default {
    created() {
      this.$store.dispatch('currentUser');
    },
    computed: {
      user() {
        return this.$store.getters.user;
      }
    },
    components: {
      appArticles: Articles,
    }
  };
</script>
