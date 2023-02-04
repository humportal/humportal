<template>
  <b-container class="position-relative">
    <b-row>
      <b-col cols="xs" class="position-fixed sidenav">
        <b-navbar-nav v-for="doc of docs" :key="doc.slug">
          <b-nav-item href="#">
            <NuxtLink :to="{name: 'reference-docs-slug', params: {slug: doc.slug}}">
              {{doc.slug}}
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-col>
      <b-col class="content-col">
        <NuxtContent :document="doc" />
     </b-col>
    </b-row>
  </b-container>
</template>
<style>
  .sidenav{
    margin-top: 100px;
    text-align: right;
    font-size: 1.2em;
  }
  .content-col{
    margin-left: 200px;
  }
</style>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`documentation/${params.slug}`).fetch();
    const docs = await $content("documentation").fetch()
    return { doc, docs };
  },
};
</script>
