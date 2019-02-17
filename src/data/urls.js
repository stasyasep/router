const urls = {
  hostApi: `https://api.charidy.com`,
  getCampaign: `/api/v1/campaign/:id`,
  getDonationList: `/api/v1/campaign/:campaignId/donations?extend=organization&extend=level&extend=team`,
};

export default urls;
