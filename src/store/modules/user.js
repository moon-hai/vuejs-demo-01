import axios from 'axios'
import router from '../../router'

const authToken = 'Token ' + localStorage.getItem('token')

const state = {
  token: null,
  userId: null,
  user: null,
  author: null,
  errors: null
}

const mutations = {
  authUser (state, userData) {
    state.token = userData.token
    state.userId = userData.userId
  },
  storeUser (state, user) {
    state.user = user
  },
  storeAuthor (state, author) {
    state.author = author
  },
  errorUser (state, err) {
    state.errors = err
  },
  clearAuthData (state) {
    state.token = null
    state.userId = null
  },
  clearState (state) {
    state.success = false
    state.errors = null
  }
}

const actions = {
  setLogoutTimer ({commit}, expirationTime) {
    setTimeout(() => {
      commit('clearAuthData')
      commit('logout')
    }, expirationTime * 1000)
  },
  signup ({ commit, dispatch }, authData) {
    axios({
      method: 'post',
      url: '/users',
      data: authData,
    })
    .then(res => {
      console.log(res.data.user)
      commit('authUser', res.data.user)
      const now = new Date()
      const expirationDate = new Date(now.getTime() + 10800 * 1000)
      localStorage.setItem('token', res.data.user.token)
      localStorage.setItem('userId', res.data.user.id)
      localStorage.setItem('username', res.data.user.username)
      localStorage.setItem('userImage', res.data.user.image)
      localStorage.setItem('expirationDate', expirationDate)
      dispatch('setLogoutTimer', 10800)
      router.push('/profile')
    })
    .catch(e => {
      if(e.response.status === 422) {
        commit('errorUser', e.response.data.errors);
      }
    })
  },
  login ({ commit, dispatch }, authData) {
    axios({
      method: 'post',
      url: '/users/login',
      data: authData,
    })
    .then(res => {
      console.log(res.data.user)
      const now = new Date()
      const expirationDate = new Date(now.getTime() + 10800 * 1000)
      localStorage.setItem('token', res.data.user.token)
      localStorage.setItem('userId', res.data.user.id)
      localStorage.setItem('username', res.data.user.username)
      localStorage.setItem('userImage', res.data.user.image)
      localStorage.setItem('expirationDate', expirationDate)
      commit('authUser', res.data.user)
      dispatch('setLogoutTimer', 10800)
      router.push('/profile')
    })
    .catch(e => {
      if (e.response.status === 422) {
        commit('errorUser', e.response.data.errors);
      }
    })
  },
  update ({ commit }, authData) {
    axios({
      method: 'put',
      url: '/user',
      data: authData,
      headers: {
        'Authorization': authToken,
      },
    })
    .then(res => {
      router.push('/profile')
    })
    .catch(e => {
      if (e.response.status === 422) {
        commit('errorUser', e.response.data.errors);
      }
    })
  },
  currentUser({ commit }) {
    axios({
      method: 'get',
      url: '/user',
      headers: {
        'Authorization': authToken,
      }
    })
    .then(res => {
      commit('storeUser', res.data.user)
      console.log(res);
    })
    .catch(e => {
      console.log(e.response.data)
    })
  },
  authorProfile({ commit }, username) {
    axios({
      method: 'get',
      url: '/profiles/' + username
    })
    .then(res => {
      console.log(res.data.profile)
      commit('storeAuthor', res.data.profile)
    })
    .catch(e => {
      console.log(e.response.data)
    })
  },
  tryAutoLogin ({ commit }) {
    const token = localStorage.getItem('token')
    if(!token) {
      return
    }
    const expirationDate = localStorage.getItem('expirationDate')
    const now = new Date()
    if (now >= expirationDate) {
      return
    }
    const userId = localStorage.getItem('userId')
    commit('authUser', {
      token: token,
      userId: userId
    })
  },
  logout ({ commit }) {
    commit('clearAuthData')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    router.push('/login')
  },
  resetState({ commit }) {
    commit('clearState')
  }
}

const getters = {
  user (state) {
    return state.user
  },
  author (state) {
    return state.author
  },
  isAuthenticated (state) {
    return state.token !== null
  },
  errors(state) {
    return state.errors
  },
  success(state) {
    return state.success
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}


