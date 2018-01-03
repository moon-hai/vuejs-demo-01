<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">{{ comment.body }}</p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="comment.author.image" class="comment-author-img" />
      </a>
      &nbsp;
      <a href="" class="comment-author">{{ comment.author.username }}</a>
      <span class="date-posted">{{ comment.createdAt | formatDate }}</span>
      <span class="mod-options">
        <i
          class="ion-trash-a"
          v-if="comment.author.username === currentUser"
          @click="deleteComment()"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['comment'],
    data() {
      return {
        currentUser: localStorage.getItem('username'),
      };
    },
    methods: {
      deleteComment() {
        const data = {
          slug: this.$route.params.slug,
          id: this.comment.id,
        };
        this.$store.dispatch('deleteComment', data);
      },
    },
  };
</script>
