<template>
  <b-container>
    <b-row>
      <b-col md="8">
        <b-jumbotron class="ml-4 mr-4 mt-1" bg-variant="light">
          <template #header>A Spotlight on International <span class="highlight">Humanitarian</span> Assistance IATI Data</template>
          <b-row>
            <b-col>
              <h3>Welcome to the IATI Humanitarian Data Portal</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="9" class="lead">
              Explore the humanitarian data that Grand Bargain Signatories are publishing to IATI and learn more about how the <nuxt-link  to="/about/">Grand Bargain Transparency commitments</nuxt-link> are helping signatories to publish better data on global humanitarian action.
            </b-col>
          </b-row>
          <hr />
          <b-row v-if="busy==false">
            <b-col md="4">
              <span class="stat-description">
                Grand Bargain Signatories
              </span>
              <h4 class="stat red-color">{{ stats.signatories }}</h4>
            </b-col>
            <b-col md="4">
              <span class="stat-description">
                GB signatories publishing to IATI
              </span>
              <h4 class="stat blue-color">{{ stats.iati }}</h4>
            </b-col>
            <b-col md="4">
              <span class="stat-description">
                Signatories or their affiliates publishing humanitarian data
              </span>
              <h4 class="stat green-color">{{ stats.humanitarian }}</h4>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="text-muted font-italic">Last updated {{ lastUpdated }}</p>
            </b-col>
          </b-row>
        </b-jumbotron>
      </b-col>
      <b-col md="4" class="d-none d-md-inline overflow-none">
        <DecorationLanding />
      </b-col>
    </b-row>
    <h3 class="blog-headline">Updates</h3>
    <BlogList :data-list="blogs"/>
  </b-container>
</template>

<script>

import { mapState } from 'vuex'
import DecorationLanding from '../components/DecorationLanding.vue'
import BlogList from '../components/blogList.vue'
export default {
    async asyncData({ $content}) {
        const blogs = await $content('blogs').limit(3)
        .sortBy('date', 'desc')
        .fetch()
        return { blogs }
    },
  components: {
    DecorationLanding,
  },
  data() {
    return {
      busy: true
    }
  },
  computed: {
    lastUpdated() {
      const finishedDate = new Date(this.metadata.finished)
      return `${finishedDate.toLocaleDateString(undefined, {})} ${finishedDate.toLocaleTimeString(undefined, {})}`
    },...mapState(['stats', 'metadata'])
  },
  async mounted() {
    await this.$store.dispatch('loadHomepageStats')
    await this.$store.dispatch('loadMetadata')
    this.busy = false
  },
  head() {
    return {
      title: `IATI Humanitarian Data Portal`,
      meta: [
        {
          hid: 'description',
          name: `The IATI Humanitarian Data Portal - or Humportal - tracks the quality of data published by Grand Bargain signatories.`
        }
      ]
    }
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
.jumbotron h3 {
  color: #59CCBF;
}
.overflow-none {
  overflow:  hidden;
}
.highlight {
  color: white;
  background: rgb(90, 204, 191);
  padding-left: 5px;
  padding-right: 5px;
}
.jumbotron h1 {
  line-height: 1.2;
  font-size: 3.6418rem;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: -0.5px;
}

@media (max-width: 576px) {
  .jumbotron h1 {
    line-height: 1.2;
    font-size: 2rem !important;
    font-family: Inter;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
  .jumbotron {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
  }
}
.blog-headline{
  text-align: center;
}
</style>
