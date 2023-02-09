<template>
  <b-card
    class="mb-5">
    <h5>Publishers’ earmarking according to draft mapping</h5>
    <b-form-group
    label="Select a publisher">
      <b-select
        :options="signatoryData"
        v-model="publisherID"
        text-field="name"
        value-field="publisherID">
      </b-select>
    </b-form-group>
    <b-table
      sort-by="aid_type.code"
      :items="aidTypes"
      :fields="aidTypeFields">

      <template #cell(earmarking)="data">
        {{ earmarkingMapping[data.item['aid_type.code']] }}
      </template>
    </b-table>
    <p class="text-muted">Showing humanitarian spending for {{ year }}, using
      data from <a :href="cdfdLink">IATI's Country Development Finance Data tool</a>.</p>

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
      aidTypes: [],
      publisherID: 'fcdo',
      earmarkingMapping: {},
      aidTypeFields: [
        {
          key: 'aid_type.code',
          label: 'Code',
          sortable: true
        },
        {
          key: 'aid_type.name_en',
          label: 'Name',
          sortable: true
        },
        {
          key: 'value_usd.sum',
          label: 'Value (USD)',
          formatter: value => {
            return value.toLocaleString(undefined, {maximumFractionDigits: 0})
          },
          thClass: 'text-right',
          tdClass: 'text-right',
          sortable: true
        },
        {
          key: 'earmarking',
          label: 'Earmarking (DRAFT Mapping)',
          sortable: true
        },
      ]
    }
  },
  computed: {
    publisherIATIIdentifier() {
      const signatory = this.signatoryData.filter(item => {
        return item.publisherID == this.publisherID
      })
      if (signatory.length>0) {
        return signatory[0]['iatiOrganisationID']
      }
    },
    cdfdLink() {
      return `https://countrydata.iatistandard.org/data/custom/?drilldowns=aid_type&filters=reporting_organisation%3A${this.publisherIATIIdentifier}%3Btransaction_type%3A3,4%3Byear%3A${this.year}%3Bhumanitarian%3A1`
    },
    year() {
      const today = new Date()
      return today.getFullYear()-1
    },
    lastUpdated() {
      const finishedDate = new Date(this.metadata.finished)
      return `${finishedDate.toLocaleDateString(undefined, {})} ${finishedDate.toLocaleTimeString(undefined, {})}`
    },
    ...mapState(['signatoryData', 'analyticsURL', 'metadata'])
  },
  methods: {
    async loadEarmarkingMapping() {
      const { data } = await axios
        .get(`https://raw.githubusercontent.com/humportal/humportal-dev/gh-pages/gb_earmarking_mapping.json`)
      this.earmarkingMapping = data.reduce((summary, item) => {
        summary[item.Code] = item['GB Earmarking']
        return summary
      }, {})
    },
    async loadSignatoryAidTypes() {
      const { data } = await axios
        .get(`https://cdfd.iati.opendataservices.coop/api/babbage/cubes/iatiline/aggregate/?drilldown=aid_type&order=value_usd.sum:desc&cut=year:%22${this.year}%22|humanitarian:"1"|transaction_type.code:"3";"4"|reporting_organisation.code:%22${this.publisherIATIIdentifier}%22&aggregates=value_usd.sum&simple&pagesize=10`)
      this.aidTypes = data.cells
    },
  },
  async mounted() {
    await this.$store.dispatch('loadSignatoryData')
    await this.$store.dispatch('loadMetadata')
    await this.loadEarmarkingMapping()
    await this.loadSignatoryAidTypes()
  },
  watch: {
    publisherID() {
      this.loadSignatoryAidTypes()
    }
  }
}
</script>