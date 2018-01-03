import axios from 'axios';
import article from './article';

const authToken = 'Token ' + localStorage.getItem('token');

const state = {
  favouriteCount: null,
};

const mutations = {
  storeFavorite(state, a) {
    const record = state.article.articles.find(element => element.slug === a.slug);
    if (record) {
      const i = state.article.articles.indexOf(record);
      state.article.articles[i].favoritesCount = a.favoritesCount;
    }
  }
};

const actions = {
  likeArticle({ commit }, slug) {
    axios({
      method: 'post',
      url: '/articles/' + slug + '/favorite',
      headers: {
        'Authorization': authToken,
      },
    })
    .then(res => {
      commit('storeFavorite', res.data.article);
    })
    .catch(e => {
      console.log(e);
    })
  },
  unlikeArticle({ commit }, slug) {
    axios({
      method: 'delete',
      url: '/articles/' + slug + '/favorite',
      headers: {
        'Authorization': authToken,
      },
    })
    .then(res => {
      commit('storeFavorite', res.data.article);
    })
    .catch(e => {
      console.log(e)
    })
  },
};

const getters = {
  getFavouriteCount(state) {
    return state.favouriteCount;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
  modules: {
    article,
  },
};
