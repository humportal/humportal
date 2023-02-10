<template>
  <b-card
    class="mb-5">
    <h5>Publishers’ progress in traceability</h5>
    <b-form-group
    label="Select a publisher">
      <b-select
        :options="publisherData"
        v-model="publisherID"
        text-field="name"
        value-field="publisherID">
      </b-select>
    </b-form-group>
    <template v-if="total>0">
      <b-progress
        :max="100"
        show-progress
        class="mb-2 text-muted"
      >
        <b-progress-bar
          :value="(traceable/total)*100"
          :label="`${((traceable/total) * 100).toFixed(0)}%`">
        </b-progress-bar>
      </b-progress>
      <p>{{ ((traceable/total) * 100).toFixed(0) }}% of this publisher’s <i>outgoing</i> spending is traceable.</p>
    </template>
    <template v-else>
      <b-alert variant="info" show>
        This publisher does not publish any commitments or disbursements.
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
      publisherID: 'minbuza_nl',
      traceable: 0,
      total: 0
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
    // Getting traceability stats
    async loadTraceableValue() {
      const {data} = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/traceable_sum_commitments_and_disbursements_by_publisher_id.json`);

      this.traceable = Math.round(data) || 0;
    },
    async loadTotalValue() {
      const {data} = await axios
        .get(`${this.analyticsURL}/current/aggregated-publisher/${this.publisherID}/traceable_sum_commitments_and_disbursements_by_publisher_id_denominator.json`);

      this.total = Math.round(data) || 0;
    }
  },
  async mounted() {
    await this.$store.dispatch('loadpublisherData')
    await this.$store.dispatch('loadMetadata')
    await this.loadTraceableValue()
    await this.loadTotalValue()
  },
  watch: {
    publisherID() {
      this.loadTraceableValue()
      this.loadTotalValue()
    }
  }
}
</script>