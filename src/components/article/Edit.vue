<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 col-md-offset-1 col-xs-12">
          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Post Title" v-model="post.postTitle">
            </fieldset>
            <fieldset class="form-group">
              <textarea class="form-control" rows="8" placeholder="Write your post (in markdown)" v-model="post.postContent"></textarea>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="editPost()">
              Edit Post
            </button>
          </form>
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
        post: {
          postTitle: '',
          postContent: '',
        },
      }
    },
    methods: {
      editPost() {
        var data = {
          slug: this.slug,
          article: {
            title: this.post.postTitle,
            description: this.post.postTitle,
            body: this.post.postContent,
            tagList: this.tagList
          }
        }
        this.$store.dispatch('editArticle', data);
      }
    }
  }
</script>
