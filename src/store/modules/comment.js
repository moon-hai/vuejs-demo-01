import axios from 'axios'

const authToken = 'Token ' + localStorage.getItem('token')

const state = {
  comments: null,
};

const mutations = {
  storeComments(state , comments) {
    state.comments = comments;
  },
  newComment(state, comment) {
    state.comments.push(comment);
  },
  deleteComment(state, id) {
    const record = state.comments.find(element => element.id == id);
    state.comments.splice(state.comments.indexOf(record), 1);
  }
};

const actions = {
  createComment({ commit }, data) {
    axios({
      method: 'post',
      url: '/articles/' + data.slug + '/comments',
      data: data.comment,
      headers: {
        'Authorization': authToken
      }
    })
    .then(res => {
      commit('newComment', res.data.comment)
    })
    .catch(e => {
      console.log(e)
    })
  },
  fetchComments({ commit }, data) {
    axios({
      method: 'get',
      url: '/articles/' + data + '/comments',
      headers: {
        'Authorization': authToken
      }
    })
    .then(res => {
      commit('storeComments', res.data.comments)
    })
    .catch(e => {
      console.log(e)
    })
  },
  deleteComment({ commit }, data) {
    axios({
      method: 'delete',
      url: '/articles/' + data.slug + '/comments/' + data.id,
      headers: {
        'Authorization': authToken
      }
    })
    .then(res => {
      commit('deleteComment', data.id)
    })
    .catch(e => {
      console.log(e)
    })
  }
};

const getters = {
  comments(state) {
    return state.comments;
  }
};

export default {
  actions,
  state,
  mutations,
  getters
}
