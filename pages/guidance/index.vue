<template>
  <b-container>
    <h3 class="text-center">Guidance</h3>
    <p class="lead text-center">Guidance notes on how to publish and use IATI data from the technical leads of the Grand Bargain Transparency Workstream.</p>
    <b-row style="margin-top: 50px" align-h="center">
      <b-card-group v-for="doc of documents" :key="doc.slug" column>
        <b-card style="max-width: 20rem;" class="mb-2 blog-card mx-1" >
          <b-card-title class="text-monospace lead font-weight-bold">{{ doc.title }}</b-card-title>
          <b-card-text class="card-text ">
            <p>{{ doc.summary }}</p>
          </b-card-text>
          <NuxtLink :to="{name: 'guidance-slug', params: { slug: doc.slug}}">
            <b-button variant="primary">Read More &raquo;</b-button>
          </NuxtLink>
        </b-card>
      </b-card-group>
    </b-row>
  </b-container>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const documents = await $content("guidance").fetch()
    return { documents };
  },
  head() {
    return {
      title: `Guidance | IATI Humanitarian Data Portal`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guidance notes on how to publish and use IATI data from the technical leads of the Grand Bargain Transparency Workstream.'
        }
      ]
    }
  }
};
</script>