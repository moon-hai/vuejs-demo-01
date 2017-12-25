import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home.vue'

import Create from '../components/article/Create.vue'
import Edit from '../components/article/Edit.vue'

import Register from '../components/users/Register.vue'
import Settings from '../components/users/Settings.vue'
import Profile from '../components/users/Profile.vue'
import Login from '../components/users/Login.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/create-article',
      name: 'Create',
      component: Create,
    },
    {
      path: '/edit-article/:slug',
      name: 'Edit',
      component: Edit,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/setting',
      name: 'Settings',
      component: Settings,
    },
  ],
  mode: 'history'
});
