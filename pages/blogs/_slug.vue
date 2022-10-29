<template>
  <b-jumbotron fluid :lead="blog.slug">
    <b-row no-gutters align-v="center">
      <b-col>
        <b-row align-v="center" margin="20">
          <b-img :src="blog.image" rounded fluid alt="" class="blog-img"></b-img>
          <b-col>
            <h2>{{ blog.title }}</h2>
          <b-badge :variant="`${blog.category === 'blog' ? 'success': 'warning'}`">{{ blog.category }}</b-badge>
          <b-badge variant="info">{{new Date(blog.date).toDateString() }}</b-badge>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <article>{{ blog.description }}</article>
    <!-- <nuxt-content :document="blog"/> -->
  </b-jumbotron>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content(`blogs/${params.slug}`).fetch()
    return {
      blog
    }
  },

}
</script>
<style scoped>
.blog-img {
  width: 200px;
  height: 200px;
  margin-right: 20px;
}
</style>
  
  