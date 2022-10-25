import Vue from "vue";
import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";
import { state, mutations } from "../../store/index";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import SignatoryProgress from "../../pages/signatory-progress/index.vue";
import SignatoryProgressLineChart from "../../components/SignatoryProgressLineChart.vue";

const localVue = createLocalVue();
Vue.use(Vuex);

const actions = {
  loadSignatoryProgressData: async () => {
    const _data = await require('../fixtures/signatories-progress.json')
    $store.commit('setSignatoryProgressData', _data)
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

    wrapper = mount(SignatoryProgress, {
      localVue,
      mocks: {
        $store,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
        SignatoryProgressLineChart: true,
        FontAwesomeIcon: true
      },
    });
  });

  it("Checks if the Signatory-Progresss page is loaded", async () => {
    const header = await wrapper.find("h2");
    expect(header.text()).toBe(
      "Data publication aggregated signatory progress"
    );
  });

  it("checks if the download button is rendered", async () => {
    const button = await wrapper.find("#download-btn");
    expect(await button.text()).toBe("Download CSV");
  });

  it("checks if the Chart is loaded", () => {
    expect(wrapper.findComponent(SignatoryProgressLineChart).exists()).toBe(true);
  });

  it("checks if the table is rendered properly", async () => {
    const table = await wrapper.find("#data-table");
    expect(await table.exists()).toBe(true);
  });

  it("checks if the table headers are rendered", async () => {
    const th = await wrapper.find("#data-table tr:nth-child(2) th:nth-child(2)");
    expect(th.text()).toBe("Total no. of Grand Bargain signatories");
  });

  it("checks if one row is rendered", async () => {
    const tr = await wrapper.findAll("#data-table tbody tr");
    expect(tr).toHaveLength(1);
  });
});
