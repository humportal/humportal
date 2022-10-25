import Vue from "vue";
import { mount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import { mutations, state } from "../../store/index";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import Home from "../../pages/index.vue";

const localVue = createLocalVue();
Vue.use(Vuex);

const actions = {
  loadHomepageStats: async () => {
    const _data = await require('../fixtures/homepage.json')
    $store.commit('setHomepageStats', _data)
  },
  loadMetadata: async () => {
    const _data = await require('../fixtures/metadata.json')
    $store.commit('setMetadata', _data)
  }
}
const $store = new Vuex.Store({
  state,
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

  it("checks if the correct figure is rendered for Signatories", async () => {
    const firstStat = await wrapper.find(".stat.red-color");
    expect(firstStat.text()).toBe("65");
  });

  it("checks if the correct figure is rendered for IATI", async () => {
    const secondStat = await wrapper.find(".stat.blue-color");
    expect(secondStat.text()).toBe("56");
  });

  it("checks if the correct figure is rendered for Humanitarian", async () => {
    const thirdStat = await wrapper.find(".stat.green-color");
    expect(thirdStat.text()).toBe("53");
  });
});
