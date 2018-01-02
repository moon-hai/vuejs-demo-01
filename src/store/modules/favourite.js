import axios from 'axios'

const authToken = 'Token ' + localStorage.getItem('token')

const state = {

};

const mutations = {

};

const actions = {
  likeArticle({ commit }, slug) {
    axios({
      method: 'post',
      url: '/articles/'+slug+'/favorite',
      headers: {
        'Authorization': authToken,
      },
    })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  },
  unlikeArticle({ commit }, slug) {
    axios({
      method: 'delete',
      url: '/articles/'+slug+'/favorite',
      headers: {
        'Authorization': authToken,
      },
    })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
