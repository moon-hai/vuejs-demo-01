import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  }
});
