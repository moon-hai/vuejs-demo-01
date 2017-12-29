<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="author.image" class="user-img" />
            <h4>{{ author.username }}</h4>
            <p>{{ author.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{ author.username }}
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <app-articles :username="username"></app-articles>
      </div>
    </div>
  </div>
</template>

<script>
  import Articles from './Articles';

  export default {
    data() {
      return {
        username: this.$route.params.username,
      }
    },
    computed: {
      author() {
        return this.$store.getters.author;
      }
    },
    created() {
      this.$store.dispatch('authorProfile', this.username);
    },
    components: {
      appArticles: Articles,
    }
  };
</script>
