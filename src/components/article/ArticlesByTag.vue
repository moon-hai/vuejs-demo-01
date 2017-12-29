<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-10 offset-md-1">
        <app-article v-for="article in articles" :article="article"></app-article>
        <!-- <div class="article-preview">
          <div class="article-meta">
            <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 29
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div> -->
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
      }
    },
    created() {
      this.$store.dispatch('fetchArticleByTag', this.tag);
    },
    computed: {
      articles() {
        return this.$store.getters.getListArticles;
      }
    },
    components: {
      appArticle: Article,
    }
  }
</script>
