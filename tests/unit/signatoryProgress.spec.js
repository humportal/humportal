import Vue from "vue";
import {
  shallowMount,
  mount,
  createLocalVue,
  RouterLinkStub,
} from "@vue/test-utils";
import { actions, mutations } from "../../store/index";
import Vuex from "vuex";
import BootstrapVue from "bootstrap-vue";
import SignatoryProgress from "../../pages/signatory-progress/index.vue";
import SignatoryProgressLineChart from "../../components/SignatoryProgressLineChart.vue";

const localVue = createLocalVue();
Vue.use(Vuex);

const apiURL = "https://humportal.github.io/humportal-data";
const analyticsURL =
  "https://raw.githubusercontent.com/codeforIATI/IATI-Stats-public/gh-pages";

const data = {
  busy: false,
  signatoryProgressChartFields: [
    "Publishing open data using IATI",
    "Publishing data on their humanitarian activities",
    "Using v2.02 of the IATI standard or later",
    "Providing more granular v2.02",
    "Publishing Traceability Information",
    "Providing more granular v2.03",
  ],
  signatoryProgressFields: [
    {
      key: "Date",
    },
    {
      key: "Total Signatories",
      label: "Total no. of Grand Bargain signatories",
    },
    {
      key: "Publishing open data using IATI",
      label: "Organisations* publishing to IATI",
      divideBy: "Total Signatories",
    },
    {
      key: "Publishing data on their humanitarian activities",
      label: "Publishing hum. activity data",
      divideBy: "Publishing open data using IATI",
    },
    {
      key: "Using v2.02 of the IATI standard or later",
      label: "Using v2.02 of the IATI standard or later",
      divideBy: "Publishing open data using IATI",
    },
    {
      key: "Providing more granular v2.02",
      label: "Providing granular v2.02 data",
      divideBy: "Publishing open data using IATI",
    },
    {
      key: "Publishing Traceability Information",
      label: "Publishing IATI traceability info",
      divideBy: "Publishing open data using IATI",
    },
    {
      key: "Providing more granular v2.03",
      label: "Providing granular v2.03 data",
      divideBy: "Publishing open data using IATI",
    },
  ],
};
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

    wrapper = mount(SignatoryProgress, {
      localVue,
      data() {
        return data;
      },
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
    expect(wrapper.find(SignatoryProgressLineChart).exists()).toBe(true);
  });

  it("checks if the table is rendered properly", async () => {
    const table = await wrapper.find("#data-table");
    expect(await table.exists()).toBe(true);
  });
});
