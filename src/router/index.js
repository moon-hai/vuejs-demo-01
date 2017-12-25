import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Article from '../pages/Article.vue'
import Create from '../pages/Create.vue'
import Profile from '../pages/Profile.vue'
import Setting from '../pages/Setting.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
    },
    {
      path: '/profile/:slug',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/article',
      name: 'Article',
      component: Article,
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
    },
  ],
  mode: 'history'
});
