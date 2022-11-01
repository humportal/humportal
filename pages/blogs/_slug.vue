<template>
  <b-container class="blog-container">
    <b-row no-gutters align-v="center">
      <b-col>
        <b-row align-v="center" margin="20">
          <b-img v-if="blog.image" :src="blog.image" rounded fluid alt="" class="blog-img"></b-img>
          <b-col>
            <h2 >{{ blog.title }}</h2>
          <b-badge :variant="blog.category === 'blog' ? 'info' : 'warning'">{{ blog.category }}</b-badge>
          <b-badge variant="dark">{{new Date(blog.date).toDateString() }}</b-badge>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <article class="my-5">
      <nuxt-content :document="blog"/>
      <b-button :href="blog.url" target="_blank" variant="primary" class="mt-4">
       <font-awesome-icon :icon="['fas', 'external-link-alt']" class="mr-2"/>
        {{blog.category === 'blog' ? 'Read More' : 'Visit Site'}}
      </b-button>
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
.blog-container{
  max-width: 50%;
}
.blog-img {
  width: 200px;
  height: 200px;
  margin-right: 20px;
}
</style>
  
  