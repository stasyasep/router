import axios from 'axios';
import urls from '@/data/urls';

const state = {
  donors: null,
  loadingDonors: true,
};

const getters = {

};

const mutations = {

};

const actions = {
  getDonors({ commit }, { idCampaign }) {
    axios.get(urls.hostApi + urls.getDonationList.replace(':id', idCampaign) + getParams)
      .then(response => {
        commit('SET_DATA', response.data.data);
      })
  }
};

export default  {
  state,
  getters,
  mutations,
  actions,
};
