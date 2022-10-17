import Vue from "vue";
import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import { actions, mutations, state } from "../../store/index";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import Home from "../../pages/index.vue";

const localVue = createLocalVue();
Vue.use(Vuex);

const apiURL = "https://humportal.github.io/humportal-data";
const analyticsURL =
  "https://raw.githubusercontent.com/codeforIATI/IATI-Stats-public/gh-pages";
const $store = new Vuex.Store({
  state: {
    stats: {
      signatories: 65,
      iati: 56,
      humanitarian: 53,
    },
    signatoryData: [],
    signatoryProgressData: [],
    metadata: {},
    analyticsURL: analyticsURL,
    apiURL: apiURL,
  },
  actions,
  mutations,
});

describe("index.vue", () => {
  let wrapper;
  beforeEach(() => {
    localVue.use(Vuex);
    localVue.use(BootstrapVue);

    wrapper = mount(Home, {
      localVue,
      data() {
        return {
          busy: false,
        };
      },
      mocks: {
        $store,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
  });

  it("Checks if the Home page is loaded", () => {
    const header = wrapper.find("h3");
    expect(header.text()).toBe("Welcome to the IATI Humanitarian Data Portal");
  });

  it("checks if the correct figure is rendered for Signatories", () => {
    const firstStat = wrapper.find(".stat.red-color");
    expect(firstStat.text()).toBe("65");
  });

  it("checks if the correct figure is rendered for IATI", () => {
    const secondStat = wrapper.find(".stat.blue-color");
    expect(secondStat.text()).toBe("56");
  });

  it("checks if the correct figure is rendered for Humanitarian", () => {
    const thirdStat = wrapper.find(".stat.green-color");
    expect(thirdStat.text()).toBe("53");
  });
});
