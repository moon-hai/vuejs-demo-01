<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 offset-md-1">
        <app-article v-for="article in articles" :article="article"></app-article>
      </div>
    </div>
  </div>
</template>

<script>
  import Article from './Article';

  export default {
    data() {
      return {
        tag: this.$route.params.name,
      };
    },
    created() {
      this.$store.dispatch('fetchArticleByTag', this.tag);
    },
    computed: {
      articles() {
        return this.$store.getters.getListArticles;
      },
    },
    components: {
      appArticle: Article,
    },
  };
</script>
