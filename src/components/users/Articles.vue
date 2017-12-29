<template>
  <div class="full-width">
    <app-article v-for="article in getListArticles" :key="article.id" :article="article"></app-article>
  </div>
</template>

<script>
  import Article from './Article';

  export default {
    props: ['username'],
    created() {
      this.$store.dispatch('fetchOwnerArticles', this.username);
    },
    computed: {
      getListArticles() {
        return this.$store.getters.getListArticles;
      },
    },
    components: {
      appArticle: Article,
    },
  };
</script>

<style scoped>
  .full-width {
    width: 100%;
  }
</style>
