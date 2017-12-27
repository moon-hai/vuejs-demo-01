<template>
  <!-- <app-article v-for="article in getAllArticle"></app-article> -->
  <div>
    <app-article v-for="article in getListArticles" :key="article.id" :article="article"></app-article>
  </div>


</template>

<script>
  import Article from './Article';

  export default {
    created() {
      this.$store.dispatch('fetchArticles');
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

<style>

</style>
