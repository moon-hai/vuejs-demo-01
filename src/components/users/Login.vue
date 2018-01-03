<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 col-md-offset-3 col-xs-12">
          <h1 class="text-xs-center">Log In</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}"><a>Don't you have an account?</a></router-link>
          </p>

          <div v-if="errors">
            <ul class="error-messages">
              <li v-for="(v, k) in errors">{{ k }} {{ v.toString() }}</li>
            </ul>
          </div>

          <form @submit.prevent="onSubmit">
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
            <button class="btn btn-lg btn-primary pull-xs-right">Log In</button>
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
        password: '',
      };
    },
    methods: {
      onSubmit() {
        const userData = {
          user: {
            email: this.email,
            password: this.password,
          },
        };
        console.log(userData);
        this.$store.dispatch('login', userData);
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
    }
  };
</script>
