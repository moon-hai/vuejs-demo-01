import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';

import Create from '../components/article/Create';
import Edit from '../components/article/Edit';

import Register from '../components/users/Register';
import Settings from '../components/users/Settings';
import Profile from '../components/users/Profile';
import Login from '../components/users/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
});
