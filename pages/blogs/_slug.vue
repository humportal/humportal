<template>
  <main>
    <h1>{{blog.title}}</h1>
    <nuxt-content :document="blog"/>
  </main>
  </template>
  <script>
    export default {
      async asyncData({ $content, params }) {
        const blog = await $content(`blogs/${params.slug}`).fetch()
        return {
            blog
        }
      }
    }
  </script>
  
  