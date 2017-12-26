<template>
  <div class="post-preview">
    <div class="post-meta">
      <a href="profile.html"><img :src="article.author.image" /></a>
      <div class="info">
        <a href="profile.html" class="author">{{ article.author.username }}</a>
        <span class="date">{{ article.createdAt | formatDate }}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <router-link
      :to="{ name: 'detailArticle', params: {slug:  article.slug} }"
      tag="a"
      active-class="active"
      class="preview-link">
        <h1>{{ article.title }}</h1>
        <p>{{ article.body }}</p>
        <span>Read more...</span>
      </router-link>
  </div>
</template>

<script>
  export default {
    props: ['article'],
  }
</script>
