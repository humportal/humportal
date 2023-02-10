<template>
  <b-card
    class="mb-5">
    <h5>Publishers’ progress in correctly formatting organisation identifiers</h5>
    <b-form-group
    label="Select a publisher">
      <b-select
        :options="publisherData"
        v-model="publisherID"
        text-field="name"
        value-field="publisherID">
      </b-select>
    </b-form-group>
    <template v-if="implementingOrgStats.total_orgs>0">
      <b-progress
        :max="100"
        show-progress
        class="mb-2 text-muted"
      >
        <b-progress-bar
          :value="(implementingOrgStats.total_valid_refs/implementingOrgStats.total_orgs)*100"
          :label="`${((implementingOrgStats.total_valid_refs/implementingOrgStats.total_orgs) * 100).toFixed(0)}%`">
        </b-progress-bar>
      </b-progress>
      <p>{{ ((implementingOrgStats.total_valid_refs/implementingOrgStats.total_orgs) * 100).toFixed(0) }}% of this publisher’s implementing organisation identifiers are correctly formatted.</p>
    </template>
    <template v-else>
      <b-alert variant="info" show>
        This publisher does not publish any implementing organisations.
      </b-alert>
    </template>

    <template v-if="receiverOrgStats.total_orgs>0">
      <b-progress
        :max="100"
        show-progress
        class="mb-2 text-muted"
      >
        <b-progress-bar
          :value="(receiverOrgStats.total_valid_refs/receiverOrgStats.total_orgs)*100"
          :label="`${((receiverOrgStats.total_valid_refs/receiverOrgStats.total_orgs) * 100).toFixed(0)}%`">
        </b-progress-bar>
      </b-progress>
      <p>{{ ((receiverOrgStats.total_valid_refs/receiverOrgStats.total_orgs) * 100).toFixed(0) }}% of this publisher’s receiver organisation identifiers are correctly formatted.</p>
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
      publisherID: 'gac-amc',
      implementingOrgStats: {},
      receiverOrgStats: {}
    }
  },
  computed: {
    lastUpdated() {
      const finishedDate = new Date(this.metadata.finished)
      return `${finishedDate.toLocaleDateString(undefined, {})} ${finishedDate.toLocaleTimeString(undefined, {})}`
    },
    ...mapState(['publisherData', 'analyticsURL', 'metadata'])
  },
  methods: {
    async loadSignatoryImplementingOrgStats() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/implementing_org_transaction_stats.json`)
      this.implementingOrgStats = data
    },
    async loadSignatoryReceiverOrgStats() {
      const { data } = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/receiver_org_transaction_stats.json`)
      this.receiverOrgStats = data
    }
  },
  async mounted() {
    await this.$store.dispatch('loadpublisherData')
    await this.$store.dispatch('loadMetadata')
    await this.loadSignatoryImplementingOrgStats()
    await this.loadSignatoryReceiverOrgStats()
  },
  watch: {
    publisherID() {
      this.loadSignatoryImplementingOrgStats()
      this.loadSignatoryReceiverOrgStats()
    }
  }
}
</script>