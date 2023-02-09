<template>
  <b-card
    title="Publishers’ progress in use of aid types"
    class="mb-5">
    <p>
      <b-form-group
      label="Publisher">
        <b-select
          :options="signatoryData"
          v-model="publisherID"
          text-field="name"
          value-field="publisherID">
        </b-select>
      </b-form-group>
    </p>
    <b-progress
      :max="100"
      show-progress
      class="mb-2 text-muted"
    >
      <b-progress-bar
        :value="(aidTypesTotals/activitiesOrTransactionsValue)*100"
        :label="`${((aidTypesTotals / activitiesOrTransactionsValue) * 100).toFixed(0)}%`">
      </b-progress-bar>
    </b-progress>
    <p>{{ ((aidTypesTotals / activitiesOrTransactionsValue) * 100).toFixed(0) }}% of this publisher’s {{ activitiesOrTransactions }} use OECD DAC Aid Type codes.</p>
    <p><font-awesome-icon :icon="['fas', 'check']" class="text-success" v-if="granularAidTypes > 0" />
      <font-awesome-icon :icon="['fas', 'times']" class="text-warning" v-else />
     {{ granularAidTypes }} {{ activitiesOrTransactions }} are using the new more granular aid types.</p>
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
      activitiesOrTransactions: 'activities',
      activities: 0,
      codelist_values: {},
      publisherID: 'fcdo'
    }
  },
  computed: {
    activitiesOrTransactionsValue() {
      if (this.activitiesOrTransactions == 'activities') {
        return this.activities
      }
      return this.transactions
    },
    transactions() {
      if (Object.keys(this.codelist_values).length == 0) { return 0 }
      return Object.values(this.codelist_values['.//transaction/transaction-type/@code']).reduce((total, item) =>{
        return total + item
      }, 0)
    },
    aidTypesTotals() {
      return Object.values(this.aidTypes).reduce((summary, item) => {
        return summary + item
      }, 0)
    },
    aidTypes() {
      if (this.codelist_values[".//default-aid-type[@vocabulary = '1' or not(@vocabulary)]/@code"]) {
        this.activitiesOrTransactions = 'activities'
        return this.codelist_values[".//default-aid-type[@vocabulary = '1' or not(@vocabulary)]/@code"]
      } else if (this.codelist_values[".//transaction/aid-type[@vocabulary = '1' or not(@vocabulary)]/@code"] ) {
        this.activitiesOrTransactions = 'transactions'
        return this.codelist_values[".//default-aid-type[@vocabulary = '1' or not(@vocabulary)]/@code"]
      }
      return {}
    },
    granularAidTypes() {
      return Object.entries(this.aidTypes).reduce((summary, item) => {
        if (['B021', 'B022', 'B031', 'B032', 'B033'].includes(item[0])) {
          summary += item[1]
        }
        return summary
      }, 0)
    },
    ...mapState(['signatoryData', 'analyticsURL'])
  },
  methods: {
    async loadSignatoryActivities() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/activities.json`)
      this.activities = data
    },
    async loadSignatoryCodelistValues() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/codelist_values.json`)
      this.codelist_values = data
    }
  },
  async mounted() {
    await this.$store.dispatch('loadSignatoryData')
    await this.loadSignatoryActivities()
    await this.loadSignatoryCodelistValues()
  },
  watch: {
    publisherID() {
      this.loadSignatoryActivities()
      this.loadSignatoryCodelistValues()
    }
  }
}
</script>