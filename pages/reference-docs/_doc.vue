<template>
    <div>
      <NuxtContent :document="doc" />
    </div>
  </template>
  <script>
  export default {
    async asyncData( { $content, params } ) {
      const doc = await $content(`documentation/${params.slug}`).fetch()
      return { doc }
    }
  }
  </script>
  