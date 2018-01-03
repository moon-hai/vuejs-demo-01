<template>
  <div class="col-xs-12 col-md-8 offset-md-2">
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
          v-model="body"></textarea>
      </div>
      <div class="card-footer">
        <img :src="authorImage" class="comment-author-img" />
        <button
          class="btn btn-sm btn-primary"
          @click.prevent="onSubmit()">
         Post Comment
        </button>
      </div>
    </form>
    <app-comment v-for="comment in getComments" :key="article.id" :comment="comment"></app-comment>
  </div>
</template>

<script>
  import Comment from './Comment';

  export default {
    props: ['article'],
    data() {
      return {
        body: '',
        authorImage: localStorage.getItem('userImage')
      }
    },
    methods: {
      onSubmit() {
        var data = {
          slug: this.article.slug,
          comment: {
            body: this.body
          }
        }
        this.$store.dispatch('createComment', data);
        this.body = '';
      }
    },
    components: {
      appComment: Comment,
    },
    computed: {
      getComments() {
        return this.$store.getters.comments;
      }
    },
    created() {
      this.$store.dispatch('fetchComments', this.article.slug);
    },
  }
</script>
