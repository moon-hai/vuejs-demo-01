<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <div v-if="errors">
            <ul class="error-messages">
              <li v-for="(v, k) in errors">{{ k }} {{ v.toString() }}</li>
            </ul>
          </div>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control"
                type="text"
                placeholder="URL of profile picture"
                v-model="image">
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                v-model="username">
            </fieldset>
            <fieldset class="form-group">
              <textarea
                class="form-control form-control-lg"
                rows="8"
                placeholder="Short bio about you"
                v-model="bio"></textarea>
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="email">
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
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
        email: '',
        username: '',
        password: '',
        image: '',
        bio: '',
      };
    },
    methods: {
      onSubmit() {
        const userData = {
          user: {
            email: this.email,
            username: this.username,
            password: this.password,
            image: this.image,
            bio: this.bio,
          },
        };
        this.$store.dispatch('update', userData);
      },
    },
    computed: {
      errors() {
        return this.$store.getters.errors;
      },
    },
    beforeRouteLeave(to, from, next) {
      this.$store.dispatch('resetState');
      next();
    },
  };
</script>
