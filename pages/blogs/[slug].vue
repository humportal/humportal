<template>
  <main>
    <nuxt-content document="blog"/>
  </main>
  </template>
  <script>
    export default {
      async asyncData({ $content }) {
        const blog = await $content('blogs/second').fetch()
        return {
            blog
        }
      }
    }
  </script>
  
  