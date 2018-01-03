<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{ name: 'authorProfile', params: { username: article.author.username } }"
            tag="a">
            <img :src="article.author.image" />
          </router-link>
          <div class="info">
            <router-link
              :to="{ name: 'authorProfile', params: { username: article.author.username } }"
              tag="a"
              class="author">
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt | formatDate }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
          Web development technologies have evolved at an incredible clip over the past few years.
          </p>
          <h2 id="introducing-ionic">{{ article.description }}</h2>
          <p>{{ article.body }}</p>
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <div class="article-meta">
          <router-link
            :to="{ name: 'authorProfile', params: { username: article.author.username } }"
            tag="a">
            <img :src="article.author.image">
          </router-link>
          <div class="info">
            <router-link
              :to="{ name: 'authorProfile', params: { username: article.author.username } }"
              tag="a"
              class="author">
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt | formatDate }}</span>
          </div>

          <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }} <span class="counter">(10)</span>
          </button>
          &nbsp;
          <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post <span class="counter">({{ article.favoritesCount }})</span>
          </button>
          <div>
            <button
              class="btn btn-sm btn-danger"
              v-if="article.author.username === username"
              @click="deleteArticle"
              >Delete</button>
              <router-link
                :to="{ name: 'edit', params: { slug: slug }}"
                v-if="article.author.username === username"
                tag="a"
                class="btn btn-sm btn-info">
                Edit
              </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <app-comments :article="article"></app-comments>
      </div>
    </div>
  </div>
</template>

<script>
  import Comments from '../comment/Comments';

  export default {
    data() {
      return {
        slug: this.$route.params.slug,
        username: localStorage.getItem('username')
      };
    },
    components: {
      appComments: Comments
    },
    computed: {
      article() {
        return this.$store.getters.getArticle;
      },
    },
    created() {
      this.$store.dispatch('fetchSingleArticle', this.slug);
    },
    methods: {
      deleteArticle() {
        this.$store.dispatch('deleteArticle', this.slug);
      }
    },
  };
</script>

<style>

</style>
