const state = {
  idToken: null,
  user: null
}

const mutations: {
  authUser (state, userData) {
    state.idToken = userData.idToken
  },
  storeUser (state, user) {
    state.user = user
  },
  clearAuthData (state) {
    state.idToken = null
  }
}

const actions: {
  setLogoutTimer ({commit}, expirationTime) {
    setTimeout(() => {
      commit('clearAuthData')
    }, expirationTime * 1000)
  },
  signup ({commit, dispatch})
}


