<template>
  <b-container>
    <b-row>
      <b-col md="3" class="text-md-right">
        <b-navbar toggleable="md">
          <b-navbar-toggle target="reference-nav-collapse">Guidance notes menu</b-navbar-toggle>
          <b-collapse id="reference-nav-collapse" is-nav>
            <b-navbar-nav vertical class="sidebar-nav">
              <div class="sidenav">
                <b-nav-text class="font-italic text-dark">Guidance Notes</b-nav-text>
                <b-nav-item
                  :to="{name: 'guidance-slug', params: {slug: doc.slug}}"
                  v-for="doc of docs"
                  :key="doc.slug">
                  {{ doc.title }}
                </b-nav-item>
              </div>
              <div class="toc">
                <b-nav-text class="font-italic text-dark">In this Note</b-nav-text>
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
    const doc = await $content(`guidance/${params.slug}`).fetch();
    const docs = await $content("guidance").fetch()
    return { doc, docs };
  },
};
</script>
