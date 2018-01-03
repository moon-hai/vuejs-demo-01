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
            <fieldset class="form-group">
              <input class="form-control" type="text" placeholder="Enter tags" v-model="tags" @keydown="insertTag()">
              <div class="tag-list">
                <span class="label label-pill label-default" v-for="tag in tagList"><i class="ion-close-round"></i>{{ tag }}  </span>
              </div>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="createPost()">
              Create Post
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
        post: {
          postTitle: '',
          postContent: '',
        },
        tags: '',
        tagList: [],
      }
    },
    methods: {
      insertTag() {
        var tag = this.tags.split(" ");
        var list = [];
        for (let t in tag) {
          list.push(tag[t]);
        }
        this.tagList = list;
        console.log(this.tagList);
      },
      createPost() {
        var data = {
          article: {
            title: this.post.postTitle,
            description: this.post.postTitle,
            body: this.post.postContent,
            tagList: this.tagList
          }
        }
        this.$store.dispatch('createArticle', data);
      }
    }
  }
</script>
