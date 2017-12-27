import axios from 'axios'

const state = {
  tags: null,
};

const mutations = {
  storeTags(state, tags) {
    state.tags = tags;
  }
};

const actions = {
  fetchTags({ commit }) {
    axios({
      method: 'get',
      url: '/tags'
    })
    .then(res => {
      const tags = res.data.tags;
      console.log(tags.length);
      // console.log(tags);
      for(let tag in tags) {
        console.log(tags[tag]);
      }
      commit('storeTags', tags);
    })
    .catch(e => {
      console.log(e);
    })
  }
};

const getters = {
  getTags() {
    return state.tags;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
