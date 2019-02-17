import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import campaign from './modules/campaign.js';

export default new Vuex.Store({
  modules: {
    campaign,
  },
});
