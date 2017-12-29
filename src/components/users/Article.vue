<template>
  <div class="post-preview">
    <div class="post-meta">
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
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <router-link
      :to="{ name: 'detailArticle', params: { slug:  article.slug } }"
      tag="a"
      active-class="active"
      class="preview-link">
        <h1>{{ article.title }}</h1>
        <p>{{ article.body.trim().substring(0, 200) }}</p>
        <span>Read more...</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['article'],
  }
</script>
