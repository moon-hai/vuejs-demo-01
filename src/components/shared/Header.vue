<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link
        :to="{name: 'home'}"
        tag="a"
        class="navbar-brand">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <router-link
          :to="{name: 'create'}"
          tag="li"
          class="nav-item"
          v-if="auth">
            <a class="nav-link"><i class="ion-compose"></i>&nbsp;New Post</a>
        </router-link>
        <router-link
          :to="{name: 'register'}"
          tag="li"
          class="nav-item"
          v-if="!auth">
            <a class="nav-link">Sign up</a>
        </router-link>
        <router-link
          :to="{name: 'login'}"
          tag="li"
          class="nav-item"
          v-if="!auth">
            <a class="nav-link">Login</a>
        </router-link>
        <router-link
          :to="{name: 'profile'}"
          tag="li"
          class="nav-item"
          v-if="auth">
            <a class="nav-link">Profile</a>
        </router-link>
        <router-link
          :to="{name: 'settings'}"
          tag="li"
          class="nav-item"
          v-if="auth">
            <a class="nav-link">Settings</a>
        </router-link>
        <li class="nav-item">
          <a
            @click="onLogout"
            class="nav-link"
            v-if="auth">Logout&nbsp;<i class="ion-android-exit"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>


