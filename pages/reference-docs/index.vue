<template>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("documentation").limit(1).fetch()
    return { doc };
  },
};
</script>