import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const baseURL = "https://humportal.org";
const apiURL = "https://humportal.github.io/humportal-data";
const codelistsApiURL = "https://codelists.codeforiati.org/api/json/en/";
const analyticsURL =
  "https://raw.githubusercontent.com/codeforIATI/IATI-Stats-public/gh-pages";

export const state = () => ({
  stats: {
    signatories: null,
    iati: null,
    humanitarian: null,
  },
  signatoryData: [],
  signatoryProgressData: [],
  metadata: {},
  organisationRegistrationAgencies: {},
  countries: {},
  analyticsURL: analyticsURL,
  apiURL: apiURL,
  codelistsApiURL: codelistsApiURL,
});

export const mutations = {
  setHomepageStats(state, data) {
    state.stats = data;
  },
  setSignatoryData(state, data) {
    state.signatoryData = data;
  },
  setSignatoryProgressData(state, data) {
    state.signatoryProgressData = data;
  },
  setMetadata(state, data) {
    state.metadata = data;
  },
  setOrganisationRegistrationAgencies(state, data) {
    state.organisationRegistrationAgencies = data.data.reduce((summary, item) => {
      summary[item.code] = item
      return summary
    }, {});
  },
  setCountries(state, data) {
    state.countries = data.data.reduce((summary, item) => {
      summary[item.code] = item.name
      return summary
    }, {});
  },
};

export const actions = {
  async loadHomepageStats({ commit, state }) {
    if (state.stats.signatories != null) {
      return true;
    }
    const { data } = await axios.get(`${apiURL}/homepage.json`);
    commit("setHomepageStats", data);
  },
  async loadSignatoryData({ commit, state }) {
    if (state.signatoryData.length != 0) {
      return true;
    }
    const { data } = await axios.get(`${apiURL}/signatories.json`);
    commit("setSignatoryData", data);
  },
  async loadSignatoryProgressData({ commit, state }) {
    if (state.signatoryProgressData.length != 0) {
      return true;
    }
    const { data } = await axios.get(`${apiURL}/signatories-progress.json`);
    commit("setSignatoryProgressData", data);
  },
  async loadMetadata({ commit, state }) {
    if (Object.keys(state.metadata).length != 0) {
      return true;
    }
    const { data } = await axios.get(`${apiURL}/metadata.json`);
    commit("setMetadata", data);
  },
  async loadOrganisationRegistrationAgencyData({ commit, state }) {
    if (Object.keys(state.organisationRegistrationAgencies).length != 0) {
      return true;
    }
    const { data } = await axios.get(`${codelistsApiURL}/OrganisationRegistrationAgency.json`);
    commit("setOrganisationRegistrationAgencies", data);
  },
  async loadCountriesData({ commit, state }) {
    if (Object.keys(state.countries).length != 0) {
      return true;
    }
    const { data } = await axios.get(`${codelistsApiURL}/Country.json`);
    commit("setCountries", data);
  },
};
