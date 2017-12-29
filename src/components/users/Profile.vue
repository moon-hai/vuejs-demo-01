<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <img :src= "user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <div class="posts-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="#">My Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Favorited Posts</a>
              </li>
            </ul>
          </div>
          <div class="post-preview">
            <div class="post-meta">
              <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
              <div class="info">
                <a href="profile.html" class="author">Eric Simons</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 29
              </button>
            </div>
            <a href="post.html" class="preview-link">
              <h1>How to build webapps that scale</h1>
              <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
              <span>Read more...</span>
            </a>
          </div>
          <div class="post-preview">
            <div class="post-meta">
              <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
              <div class="info">
                <a href="profile.html" class="author">Albert Pai</a>
                <span class="date">January 20th</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right">
                <i class="ion-heart"></i> 32
              </button>
            </div>
            <a href="post.html" class="preview-link">
              <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
              <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
              <span>Read more...</span>
            </a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('currentUser');
    },
    computed: {
      user() {
        return this.$store.getters.user;
      }
    },
  };
</script>
