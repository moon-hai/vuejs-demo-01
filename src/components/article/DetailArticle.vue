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
              v-if="article.author.username === user.username"
              @click="deleteArticle"
              >Delete</button>
            <button class="btn btn-sm btn-info">Edit</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">
               Post Comment
              </button>
            </div>
          </form>
          <div class="card">
            <div class="card-block">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>
          <div class="card">
            <div class="card-block">
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <a href="" class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
              </a>
              &nbsp;
              <a href="" class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit"></i>
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slug: this.$route.params.slug,
      };
    },
    computed: {
      article() {
        return this.$store.getters.getArticle;
      },
      user() {
        return this.$store.getters.user;
      }
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
