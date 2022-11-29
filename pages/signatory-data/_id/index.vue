<template>
  <b-container>
    <div class="text-center text-muted my-2" v-if="busy">
      <b-spinner class="align-middle"></b-spinner>
      <strong>Loading...</strong>
    </div>
    <template v-else>
      <b-row>
        <b-col md="9">
          <h1>{{ publisher.name }}</h1>
        </b-col>
        <b-col md="3" class="ml-auto text-md-right">
          <b-btn :href="`http://d-portal.org/ctrack.html?reporting_ref=${publisher.iatiOrganisationID}#view=main`">View data on D-Portal <font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-btn>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <h2>Summary</h2>
          <b-table-simple>
            <b-tbody>
              <b-tr>
                <b-th>GB Signatory</b-th>
                <b-td>{{ publisher.gbSignatory }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Type of organisation</b-th>
                <b-td>{{ publisher.organisationType }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Frequency</b-th>
                <b-td>{{ publisher.frequency }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Timeliness</b-th>
                <b-td>{{ publisher.timeliness }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Organisation Identifier</b-th>
                <b-td>{{ publisher.iatiOrganisationID }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>IATI Version</b-th>
                <b-td>{{ publisher.iatiVersion }}</b-td>
              </b-tr>
              <b-tr>
                <b-th>Number of activities</b-th>
                <b-td>{{ activities }}</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
        </b-col>
      </b-row>
      <template v-if="this.activities>0">
        <b-row>
          <b-col>
            <hr />
            <h2>Summary of activity data</h2>
            <h3>IATI Standard v2.02 elements</h3>
            <p class="lead">
              The below charts show summaries by the total number of activities.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="3">
            <h4>Humanitarian <span v-b-tooltip.hover :title="titles.humanitarian"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['Not humanitarian', 'Humanitarian']"
              :data="[this.activities-this.humanitarian.is_humanitarian, this.humanitarian.is_humanitarian]"></SummaryPieChart>
          </b-col>
          <b-col md="3">
            <h4>GLIDE codes <span v-b-tooltip.hover :title="titles.glide_codes" ><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['No GLIDE codes', 'GLIDE codes']"
              :data="[this.activities-this.humanitarian.uses_humanitarian_glide_codes, this.humanitarian.uses_humanitarian_glide_codes]"></SummaryPieChart>
          </b-col>
          <b-col md="3">
            <h4>HRP codes <span v-b-tooltip.hover :title="titles.hrp_codes"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['No HRP codes', 'HRP codes']"
              :data="[this.activities-this.humanitarian.uses_humanitarian_hrp_codes, this.humanitarian.uses_humanitarian_hrp_codes]"></SummaryPieChart>
          </b-col>
          <b-col md="3">
            <h4>Clusters <span v-b-tooltip.hover :title="titles.humanitarian_clusters"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['No humanitarian clusters', 'Humanitarian clusters']"
              :data="[this.activities-this.humanitarian.uses_humanitarian_clusters_vocab, this.humanitarian.uses_humanitarian_clusters_vocab]"></SummaryPieChart>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr />
            <h3>IATI Standard v2.03 elements</h3>
            <p class="lead">
              The below charts show summaries by the total number of transactions or activities.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <h4>Earmarking <span v-b-tooltip.hover :title="titles.earmarking"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['Unspecified', 'Uses earmarking classifications']"
              :data="[this.transactions-this.earmarking, this.earmarking]"></SummaryPieChart>
          </b-col>
          <b-col md="4">
            <h4>Cash <span v-b-tooltip.hover :title="titles.cash"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['Unspecified', 'Uses cash classifications']"
              :data="[this.transactions-this.cash, this.cash]"></SummaryPieChart>
          </b-col>
          <b-col md="4">
            <h4>Pledges <span v-b-tooltip.hover :title="titles.pledges"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['Uses other transaction types', 'Uses pledge transaction types']"
              :data="[this.transactions-this.pledges, this.pledges]"></SummaryPieChart>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <h4>Traceability elements <span v-b-tooltip.hover :title="titles.traceability"><font-awesome-icon :icon="['fas', 'info-circle']" /></span></h4>
            <SummaryPieChart
              :labels="['Activities without traceability', 'Activities with traceability']"
              :data="[this.activities-this.traceability, this.traceability]"></SummaryPieChart>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <hr />
            <h3>Organisation identifiers and traceability</h3>
            <b-alert show variant="warning">
              <b><font-awesome-icon :icon="['fas', 'flask']" /> Experimental area!</b>
              The below tables show some recent additions to the humportal.
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4>Organisation identifiers</h4>
            <p class="lead">The below tables make it possible
              for users to see whether publishers are correctly formatting organisation identifiers,
              and whether these are referring to organisations registered with various different
              registration bodies.</p>
            <p class="lead">If publishers
              use correct organisation identifiers, it is much easier to explicitly identify
              the relevant organisation, including where they are based &ndash; something
              that is important for tracking Grand Bargain localisation commitments.</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <h4>Receiver organisations</h4>
            <b-table striped hover :fields="idFields" :items="receiver_data" show-empty>
              <template #empty="scope">
                There are no receiver organisations in this publisher's data.
              </template>
              <template #cell(RegistrationAgency)="data">
                {{ getRegistrationAgency(data.item.Prefix).name }}
              </template>
              <template #cell(Country)="data">
                {{ getRegistrationAgencyCountry(data.item.Prefix) }}
              </template>
            </b-table>
          </b-col>
          <b-col md="6">
            <h4>Implementing Organisations</h4>
            <b-table striped hover :fields="idFields" :items="implementer_data" show-empty>
              <template #empty="scope">
                There are no implementing organisations in this publisher's data.
              </template>
              <template #cell(RegistrationAgency)="data">
                {{ getRegistrationAgency(data.item.Prefix).name }}
              </template>
              <template #cell(Country)="data">
                {{ getRegistrationAgencyCountry(data.item.Prefix) }}
              </template>
            </b-table>
          </b-col>
        </b-row>
      </template>
      <template v-else>
        <b-alert variant="secondary" show class="text-center">No activities.</b-alert>
      </template>
    </template>
  </b-container>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
import DecorationLanding from '~/components/DecorationLanding.vue'

import SummaryPieChart from '~/components/SummaryPieChart.vue'
export default {
  components: {
    DecorationLanding,
    SummaryPieChart
  },
  data() {
    return {
      idFields: [
        {
          key: 'Prefix',
          label: 'Organisation Identifier Prefix',
          sortable: true,
        },
        {
          key: 'Country',
          label: 'Country',
          sortable: true,
        },
        {
          key: 'RegistrationAgency',
          label: 'Registration Agency',
          sortable: true,
        },
        {
          key: 'Number',
          label: 'Number of Activities',
          sortable: true,
        }
      ],
      receiver_data: {},
      implementer_data: {},
      busy: true,
      activities: null,
      humanitarian: {},
      codelist_values: {},
      elements: {},
      titles: {
        humanitarian: "Whether the activity or transaction has a humanitarian marker.",
        glide_codes: "Whether the activity uses any GLIDE Codes.",
        hrp_codes: "Whether the activity uses any HRP Codes.",
        humanitarian_clusters: "Whether the activity uses any humanitarian clusters.",
        earmarking: "Whether the transaction states any information about earmarking (using the aid-type vocabularies 2 or 3).",
        cash: "Whether the transaction states any information about cash (using the aid-type vocabulary 4).",
        pledges: "Whether the transaction is a pledge (transaction types 12 or 13).",
        traceability: "Whether any transaction for an activity contains the provider organisation’s activity identifier."
      },
          }
  },
  computed: {
    transactions() {
      return Object.values(this.codelist_values['.//transaction/transaction-type/@code']).reduce((total, item) =>{
        return total + item
      }, 0)
    },
    earmarking() {
      if (this.codelist_values['.//transaction/aid-type/@vocabulary']) {
        const categories = this.codelist_values['.//transaction/aid-type/@vocabulary']['2'] || 0
        const modalities = this.codelist_values['.//transaction/aid-type/@vocabulary']['3'] || 0
        return categories + modalities
      }
      return 0
    },
    cash() {
      if (this.codelist_values['.//transaction/aid-type/@vocabulary']) {
        return this.codelist_values['.//transaction/aid-type/@vocabulary']['4'] || 0
      }
      return 0
    },
    pledges() {
      if (this.codelist_values['.//transaction/transaction-type/@code']) {
        const outgoing = this.codelist_values['.//transaction/transaction-type/@code']['12'] || 0
        const incoming = this.codelist_values['.//transaction/transaction-type/@code']['13'] || 0
        return outgoing + incoming
      }
    },
    participatingOrgs() {
      return this.elements['iati-activity/participating-org'] || 0
    },
    participatingOrg24() {
      if (this.codelist_values['.//participating-org/@type']) {
        return this.codelist_values['.//participating-org/@type']['24'] || 0
      }
    },
    transaction24() {
      if (this.codelist_values['.//transaction/receiver-org/@type']) {
        return this.codelist_values['.//transaction/receiver-org/@type']['24'] || 0
      }
    },
    traceableTransactions() {
      const incoming_fund = this.codelist_values['.//transaction/transaction-type/@code']['1'] || 0
      const incoming_commitment = this.codelist_values['.//transaction/transaction-type/@code']['11'] || 0
      const incoming_pledge = this.codelist_values['.//transaction/transaction-type/@code']['13'] || 0
      return incoming_fund + incoming_commitment + incoming_pledge
    },
    traceability() {
      return this.elements['iati-activity/transaction/provider-org/@provider-activity-id'] || 0
    },
    publisher() {
      const matching = this.signatoryData.filter(item => {
        return item.iatiOrganisationID == this.organisationID
      })
      if (matching.length > 0) {
        return matching[0]
      }
      return null
    },
    organisationID() {
      return this.$route.params.id
    },
    ...mapState(['signatoryData', 'analyticsURL', 'identifierURL',
      'organisationRegistrationAgencies', 'countries'])
  },
  methods: {
    getRegistrationAgency(prefix) {
      return prefix in this.organisationRegistrationAgencies ?
        this.organisationRegistrationAgencies[prefix] : { name: '' }
    },
    getRegistrationAgencyCountry(prefix) {
      const agency = this.getRegistrationAgency(prefix)
      if (agency.category) {
        return agency.category in this.countries ? this.countries[agency.category] : ''
      }
    },
    async loadSignatoryActivities() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisher.publisherID}/activities.json`)
      this.activities = data
    },
    async loadSignatoryHumanitarian() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisher.publisherID}/humanitarian.json`)
      this.humanitarian = data
    },
    async loadSignatoryElements() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisher.publisherID}/elements.json`)
      this.elements = data
    },
    async loadSignatoryCodelistValues() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisher.publisherID}/codelist_values.json`)
      this.codelist_values = data
    },
    // Getting Receiver organizations data
    async loadReceiverData() {
      const {data} = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisher.publisherID}/receiver_org_valid_prefixes.json`)
      this.receiver_data = Object.entries(data).map(el => ({Prefix: el[0], Number: el[1]})) 
    },
    async loadImplementerData() {
      const {data} = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisher.publisherID}/implementing_org_valid_prefixes.json`)
      this.implementer_data= Object.entries(data).map(el => ({Prefix: el[0], Number: el[1]})) 
    },
  },
  async mounted() {
    await this.$store.dispatch('loadSignatoryData')
    await this.loadSignatoryActivities()
    await this.loadSignatoryHumanitarian()
    await this.loadSignatoryElements()
    await this.loadSignatoryCodelistValues()
    await this.loadReceiverData()
    await this.loadImplementerData()
    this.$store.dispatch('loadOrganisationRegistrationAgencyData')
    this.$store.dispatch('loadCountriesData')
    this.busy = false
  }
}
</script>
<style>
.stat-description {
  font-weight: bold;
}
.stat {
  margin-top: 10px;
  font-size: 64px;
  font-weight: 600;
}
.red-color {
  color:  #ed6060;
}
.blue-color {
  color:  #6e5acc;
}
.green-color {
  color:  #59CCBF;
}
</style>
