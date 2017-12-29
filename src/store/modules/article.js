import axios from 'axios'

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
      console.log(articles);
      console.log(articles);
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
      console.log(res);
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
      console.log(res.data)
      commit('storeArticles', res.data.articles);
    })
    .catch(e => {
      console.log(e.data)
    })
  },
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

