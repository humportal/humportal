<template>
  <b-container>
    <b-row no-gutters align-v="center">
      <b-col>
        <b-row align-v="center" margin="20">
          <b-img v-if="blog.image" :src="blog.image" rounded fluid alt="" class="blog-img"></b-img>
          <b-col>
            <h2>{{ blog.title }}</h2>
          <b-badge :variant="`${blog.category === 'blog' ? 'success': 'warning'}`">{{ blog.category }}</b-badge>
          <b-badge variant="info">{{new Date(blog.date).toDateString() }}</b-badge>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <article>
      <nuxt-content :document="blog"/>
    </article>
    <!-- <nuxt-content :document="blog"/> -->
  </b-container>
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
  
  