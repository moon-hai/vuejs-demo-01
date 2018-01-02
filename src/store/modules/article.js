import axios from 'axios'
import router from '../../router'

const authToken = 'Token ' + localStorage.getItem('token')

const state = {
  articles: null,
  singleArticle: null,
};

const mutations = {
  storeArticles(state, articles) {
    state.articles = articles;
  },
  storeArticle(state, article) {
    state.singleArticle = article;
  }
};

const actions = {
  fetchArticles({ commit, state }) {
    axios({
      method: 'get',
      url: '/articles',
    })
    .then(res => {
      const data = res.data.articles;
      const articles = [];
      for (let key in data) {
        const article = data[key];
        article.id = key;
        articles.push(article);
      }
      commit('storeArticles', articles);
    })
    .catch(e => {
      console.log(e)
    })
  },
  fetchSingleArticle({ commit }, slug) {
    axios({
      method: 'get',
      url: '/articles/'+slug,
    })
    .then(res => {
      const article = res.data.article;
      commit('storeArticle', article);
    })
    .catch(e => {
      console.log(e);
    })
  },
  fetchOwnerArticles({ commit }, username) {
    axios({
      method: 'get',
      url: '/articles?author=' + username
    })
    .then(res => {
      commit('storeArticles', res.data.articles);
    })
    .catch(e => {
      console.log(e.data)
    })
  },
  createArticle({ commit }, data) {
    axios({
      method: 'post',
      url: '/articles',
      data: data,
      headers: {
        'Authorization': authToken,
      },
    })
    .then(res => {
      console.log(res);
      router.push('/')
    })
    .catch(e => {
      console.log(e);
    })
  },
  fetchArticleByTag({ commit }, tag) {
    axios({
      method: 'get',
      url: '/articles?tag='+tag,
    })
    .then(res => {
      const articles = res.data.articles;
      commit('storeArticles', articles);
    })
    .catch(e => {
      console.log(e);
    })
  },
  deleteArticle({ commit }, data) {
    axios({
      method: 'delete',
      url: '/articles/' + data,
      headers: {
        'Authorization': authToken,
      }
    })
    .then(res => {
      router.push('/profile')
    })
    .catch(e => {
      console.log(e);
    })
  }
};

const getters = {
  getListArticles(state) {
    return state.articles;
  },
  getArticle(state) {
    return state.singleArticle;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
}

