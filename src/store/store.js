import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import article from './modules/article'
import tag from './modules/tag'
import favourite from './modules/favourite'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    article,
    tag,
    favourite
  }
});
