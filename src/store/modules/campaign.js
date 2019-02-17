import axios from 'axios';
import urls from '@/data/urls';

const state = {
  campaign: null,
  loadingCampaign: true,
};

const getters = {
  getImage: (state) => (tag) => {
    const images = state.campaign.relationships.media.data;
    const result = images.filter(el => el.tag === tag);
    return result;
  },

  getCampaignStatus: (state) => (thisDate) => {
    const startData = state.campaign.attributes.start_date;
    const calcDate = new Date(startData) - thisDate;
    return calcDate > 0 ? 0 : 1;
  },

  getCalcDate: (state) => (mode = 0) => {
    const startData = state.campaign.attributes.start_date;
    const endData = state.campaign.attributes.end_date;
    let result = null;
    if (mode === 0) {
      const obj = {
        time: new Date(startData) - new Date(),
        status: 'countdown'
      };
      result = obj
    } else {
      const endDateCalc = new Date(endData) - new Date();
      if (endDateCalc > 0) {
        const obj = {
          time: new Date(endData) - new Date(),
          status: 'live'
        };
        result = obj;
      } else {
        const obj = {
          time: new Date() - new Date(endData),
          status: 'end_campaign'
        };
        result = obj;
      }
    }
    return result;
  }
};

const mutations = {
  SET_DATA(state, value) {
    state.campaign = value;
  },
  SET_LOADING(state, value) {
    state.loadingCampaign = value;
  },
};

const actions = {
  getCampaign({ commit }, { idCampaign, getParams = '' }) {
    commit('SET_LOADING', true);
    axios.get(urls.hostApi + urls.getCampaign.replace(':id', idCampaign) + getParams)
      .then(response => {
        commit('SET_DATA', response.data.data);
        commit('SET_LOADING', false);
      })
  }
};

export default  {
  state,
  getters,
  mutations,
  actions,
};
