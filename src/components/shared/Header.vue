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
          class="nav-item">
            <a class="nav-link">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
        </router-link>
        <router-link
          :to="{name: 'register'}"
          tag="li"
          class="nav-item">
            <a class="nav-link">
              <i class="ion-compose"></i>&nbsp;Sign up
            </a>
        </router-link>
        <router-link
          :to="{name: 'settings'}"
          tag="li"
          class="nav-item">
            <a class="nav-link">
              <i class="ion-compose"></i>&nbsp;Settings
            </a>
        </router-link>
<!--           <li class="nav-item active">
          <a class="nav-link" href="index.html">Home</a>
        </li> -->
      </ul>
    </div>
  </nav>
</template>

<style>

</style>
