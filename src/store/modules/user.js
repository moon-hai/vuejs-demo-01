import axios from 'axios'

const state = {
  token: null,
  userId: null,
  user: null,
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
  errorUser (state, err) {
    state.errors = err
  },
  clearAuthData (state) {
    state.token = null
    state.userId = null
  }
}

const actions = {
  setLogoutTimer ({commit}, expirationTime) {
    setTimeout(() => {
      commit('clearAuthData')
    }, expirationTime * 1000)
  },
  signup ({ commit, dispatch }, authData) {
    axios({
      method: 'post',
      url: '/users',
      data: authData
    })
    .then(res => {
      console.log(res.data.user)
      commit('authUser', {
        Token: res.data.user.token,
        userId: res.data.user.id
      })
      const now = new Date()
      const expirationDate = new Date(now.getTime() + 10800 * 1000)
      localStorage.setItem('token', res.data.user.token)
      localStorage.setItem('userId', res.data.user.id)
      localStorage.setItem('expirationTime', 10800)
      dispatch('setLogoutTimer', 10800)
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
      data: authData
    })
    .then(res => {
      console.log(res.data.user)
      const now = new Date()
      const expirationDate = new Date(now.getTime() + 10800 * 1000)
      localStorage.setItem('token', res.data.user.token)
      localStorage.setItem('userId', res.data.user.id)
      localStorage.setItem('expirationTime', 10800)
      dispatch('setLogoutTimer', 10800)
    })
    .catch(e => {
      if (e.response.status === 422) {
        commit('errorUser', e.response.data.errors);
      }
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
  }
}

const getters = {
  user (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.token !== null
  },
  errors() {
    return state.errors
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}


