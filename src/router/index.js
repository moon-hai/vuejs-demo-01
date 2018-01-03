import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home';

import Create from '../components/article/Create';
import Edit from '../components/article/Edit';
import DetailArticle from '../components/article/DetailArticle';
import ArticlesByTag from '../components/article/ArticlesByTag';

import Register from '../components/users/Register';
import Settings from '../components/users/Settings';
import Profile from '../components/users/Profile';
import Login from '../components/users/Login';
import AuthorProfile from '../components/users/AuthorProfile';

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
      path: '/article/:name',
      name: 'tag',
      component: ArticlesByTag,
    },

    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next({ path: '/' });
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next({ path: '/' });
        } else {
          next();
        }
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/profile/:username',
      name: 'authorProfile',
      component: AuthorProfile,
    },
    {
      path: '/setting',
      name: 'settings',
      component: Settings,
    },
  ],
});
