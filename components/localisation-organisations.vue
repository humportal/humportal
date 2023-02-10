<template>
  <b-card
    class="mb-5">
    <h5>Publishers’ progress in referring to (potentially) local and national actors</h5>
    <b-form-group
    label="Select a publisher">
      <b-select
        :options="publisherData"
        v-model="publisherID"
        text-field="name"
        value-field="publisherID">
      </b-select>
    </b-form-group>
    <template v-if="totalImplementers>0">
      <p>{{ totalDevelopingImplementers.toLocaleString() }} out of
        {{ totalImplementers.toLocaleString() }} implementing
        organisations in this publisher’s data are registered in “developing”
        countries: {{ developingImplementersCountries.join("; ") }}</p>
    </template>
    <template v-else>
      <b-alert variant="info" show>
        This publisher does not publish any implementing organisations.
      </b-alert>
    </template>
    <template v-if="totalReceivers>0">
      <p>{{ totalDevelopingReceivers.toLocaleString() }} out of
        {{ totalReceivers.toLocaleString() }} receiver
        organisations in this publisher’s data are registered in “developing”
        countries: {{ developingReceiversCountries.join("; ") }}</p>
    </template>
    <template v-else>
      <b-alert variant="info" show>
        This publisher does not publish any receiver organisations.
      </b-alert>
    </template>
    <p class="text-muted font-italic text-md-right">Last calculated: {{ lastUpdated }}</p>
  </b-card>
</template>
<script>

import axios from 'axios'
import { mapState } from 'vuex'
export default {
  components: {
  },
  data() {
    return {
      publisherID: 'aauk',
      receiver_data: [],
      implementer_data: [],
      countryGroups: {
        'developed': [],
        'developing': []
      }
    }
  },
  computed: {
    developingImplementers() {
      return this.implementer_data.filter(item => {
        if (this.countryGroups.developing.includes(this.getRegistrationAgencyCountry(item.Prefix))) {
          return item
        }
      })
    },
    developingImplementersCountries() {
      return this.developingImplementers.map(item => {
        return `${this.countries[this.getRegistrationAgencyCountry(item.Prefix)]} (${item.Number})`
      }).sort()
    },
    totalDevelopingImplementers() {
      return this.developingImplementers.reduce((summary, item) => {
        summary += item.Number
        return summary
      }, 0)
    },
    totalImplementers() {
      return this.implementer_data.reduce((summary, item) => {
        summary += item.Number
        return summary
      }, 0)
    },
    developingReceivers() {
      return this.receiver_data.filter(item => {
        if (this.countryGroups.developing.includes(this.getRegistrationAgencyCountry(item.Prefix))) {
          return item
        }
      }).sort()
    },
    developingReceiversCountries() {
      return this.developingReceivers.map(item => {
        return `${this.countries[this.getRegistrationAgencyCountry(item.Prefix)]} (${item.Number})`
      })
    },
    totalDevelopingReceivers() {
      return this.developingReceivers.reduce((summary, item) => {
        summary += item.Number
        return summary
      }, 0)
    },
    totalReceivers() {
      return this.receiver_data.reduce((summary, item) => {
        summary += item.Number
        return summary
      }, 0)
    },
    lastUpdated() {
      const finishedDate = new Date(this.metadata.finished)
      return `${finishedDate.toLocaleDateString(undefined, {})} ${finishedDate.toLocaleTimeString(undefined, {})}`
    },
    ...mapState(['publisherData', 'analyticsURL', 'metadata', 'organisationRegistrationAgencies', 'countries'])
  },
  methods: {
    getRegistrationAgency(prefix) {
      return prefix in this.organisationRegistrationAgencies ?
        this.organisationRegistrationAgencies[prefix] : { name: '' }
    },
    getRegistrationAgencyCountry(prefix) {
      const agency = this.getRegistrationAgency(prefix)
      return agency.category
    },
    // Getting Receiver organizations data
    async loadReceiverData() {
      const {data} = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/receiver_org_valid_prefixes.json`)
      this.receiver_data = Object.entries(data).map(el => ({Prefix: el[0], Number: el[1]}))
    },
    async loadImplementerData() {
      const {data} = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/implementing_org_valid_prefixes.json`)
      this.implementer_data= Object.entries(data).map(el => ({Prefix: el[0], Number: el[1]}))
    },
    async loadUNM49Countries() {
      const {data} = await axios
        .get(`https://codelists.codeforiati.org/api/json/en/RegionM49.json`)
      this.countryGroups.developed = data.data.filter(item => {
        return item['codeforiati:developed-developing'] == 'Developed'}
      ).map(item => {
        return item['codeforiati:iso-alpha-2-code']
      })
      this.countryGroups.developing = data.data.filter(item => {
        return item['codeforiati:developed-developing'] == 'Developing'}
      ).map(item => {
        return item['codeforiati:iso-alpha-2-code']
      })
    }
  },
  async mounted() {
    await this.$store.dispatch('loadOrganisationRegistrationAgencyData')
    await this.$store.dispatch('loadCountriesData')
    await this.$store.dispatch('loadSignatoryData')
    await this.$store.dispatch('loadMetadata')
    await this.loadUNM49Countries()
    await this.loadReceiverData()
    await this.loadImplementerData()
  },
  watch: {
    publisherID() {
      this.loadReceiverData()
      this.loadImplementerData()
    }
  }
}
</script>