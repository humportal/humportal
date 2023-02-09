<template>
    <b-row style="margin-top: 50px" align-h="center">
        <b-card-group v-for="doc of documents" :key="doc.slug" column>
                <b-card style="max-width: 20rem;" class="mb-2 blog-card mx-1" >
                    <b-card-title class="text-monospace lead font-weight-bold">{{ doc.title }}</b-card-title>
                    <NuxtLink :to="{name: 'reference-docs-slug', params: { slug: doc.slug}}">
                        <b-button variant="primary">Read More</b-button>
                    </NuxtLink>
                </b-card>
        </b-card-group>
    </b-row>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const documents = await $content("guidance").fetch()
    return { documents };
  },
};
</script>