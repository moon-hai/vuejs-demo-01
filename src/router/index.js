import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';

import Create from '../components/article/Create';
import Edit from '../components/article/Edit';
import DetailArticle from '../components/article/DetailArticle';

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
      name: 'home',
      component: Home,
    },
    {
      path: '/detail-article/:slug',
      name: 'detailArticle',
      component: DetailArticle,
    },
    {
      path: '/create-article',
      name: 'create',
      component: Create,
    },
    {
      path: '/edit-article/:slug',
      name: 'edit',
      component: Edit,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/setting',
      name: 'settings',
      component: Settings,
    },
  ],
});
