<template>
  <b-container>
    <b-row>
      <b-col md="3" class="text-md-right">
        <b-navbar toggleable="md">
          <b-navbar-toggle target="reference-nav-collapse">This page navigation</b-navbar-toggle>
          <b-collapse id="reference-nav-collapse" is-nav>
            <b-navbar-nav vertical class="sidebar-nav">
              <div class="toc">
                <b-nav-text class="font-italic text-dark">On this page</b-nav-text>
                <b-nav-item
                  v-for="link of doc.toc"
                  v-if="link.depth===2"
                  :key="link.id"
                  :to="`#${link.id}`">
                  {{ link.text }}
                </b-nav-item>
              </div>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-col>
      <b-col md="9" class="content-col">
        <NuxtContent :document="doc" />
     </b-col>
    </b-row>
  </b-container>
</template>
<style>
.navbar-text {
  padding-right: 0.5rem;
}
.navbar-expand-md .sidebar-nav {
  flex-direction: column !important;
}
a.nuxt-link-active {
  font-weight: bold;
}
.sidenav {
  font-size: 1.2em;
  padding-right: 20px;
}
.toc {
  padding-right: 20px;
}
</style>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`${params.slug}`).fetch();
    return { doc };
  },
  head() {
    return {
      title: this.doc?.title ? `${this.doc.title} | IATI Humanitarian Data Portal` : `IATI Humanitarian Data Portal`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.doc?.description ? this.doc.description : `The IATI Humanitarian Data Portal - or Humportal - tracks the quality of data published by Grand Bargain signatories.`
        }
      ]
    }
  }
};
</script>
