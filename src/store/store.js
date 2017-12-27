import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import article from './modules/article'
import tag from './modules/tag'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    article,
    tag
  }
});
