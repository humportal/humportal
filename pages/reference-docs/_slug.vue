<template>
  <b-container>
    <b-row>
      <b-col cols="xs">
        <b-navbar-nav v-for="doc of docs" class="mr-3" >
          <b-nav-item href="#">
            <NuxtLink :to="{name: 'reference-docs-slug', params: {slug: doc.slug}}">
              {{doc.slug}}
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-col>
      <b-col>
        <NuxtContent :document="doc" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`documentation/${params.slug}`).fetch();
    const docs = await $content("documentation").fetch()
    return { doc, docs };
  },
};
</script>
